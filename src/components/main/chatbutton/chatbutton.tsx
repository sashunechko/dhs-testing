import React, { useState } from 'react';
import { ChatButton, FormContainer, InputField, SubmitButton, Message, MessageArea } from './chatbuttonStyled';
import { mainApi } from '../../../__data__/service/mainApi';

interface ChatProps { 
  src: string;
}



export const Chat: React.FC<ChatProps> = ({ src }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [messages, setMessages] = useState<{message: string, isAnswer: boolean}[]>([]);
  const [message, setMessage] = useState('');
  const [getGigaChat] = mainApi.useGigaChatMutation()

  const handleChatButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      const answerData = await getGigaChat({"message": message});
      const answer = answerData.data?.message;
      setMessages([...messages, {message, isAnswer: false}, {message: answer, isAnswer: true}]);
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
            {messages.map(({message, isAnswer}, index) => (
              <Message isAnswer={isAnswer} key={index}>{message}</Message>
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