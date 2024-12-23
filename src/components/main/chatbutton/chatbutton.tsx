import React, { useState } from 'react';
import { ChatButton, FormContainer, InputField, SubmitButton, Message, MessageArea } from './chatbutton-styled';

interface ChatProps { 
  src: string;
}
export const Chat: React.FC<ChatProps> = ({ src }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleChatButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <>
      <ChatButton onClick={handleChatButtonClick}>
        <img src={src} />
      </ChatButton>
      {isFormVisible && (
        <FormContainer>
          <MessageArea>
            {messages.map((msg, index) => (
              <Message key={index}>{msg}</Message>
            ))}
          </MessageArea>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              placeholder="Введите сообщение..."
              value={message}
              onChange={handleChange}
            />
            <SubmitButton type="submit">Отправить</SubmitButton>
          </form>
        </FormContainer>
      )}
    </>
  );
};