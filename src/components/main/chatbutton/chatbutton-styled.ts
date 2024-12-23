import styled from '@emotion/styled';

export const ChatButton = styled.button`
  position: fixed; 
  bottom: 15px; 
  right: 20px; 
  width: 110px; 
  height: 110px; 
  border-radius: 50%; 
  padding: 0; 
  background-color: transparent; 
  border: none; 
  cursor: pointer;  
  &:focus { outline: none;  } 
  img { width: 100%;  height: auto; display: block; }
`;

export const FormContainer = styled.div`
  position: fixed;
  bottom: 120px;
  right: 20px;
  border: 5px solid #babce2;
  border-radius: 25px;
  width: 400px;
  height: 500px;
  background: #e0e1f2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MessageArea = styled.div`
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
`;

export const Message = styled.p`
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  max-width: 70%;
  word-wrap: break-word;
  float: right; 
  clear: both;
`;

export const InputField = styled.input`
  margin-top: auto;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #babce2;
  background-color: transparent;
`;

export const SubmitButton = styled.button`
  padding: 8px 20px;
  font-size: 16px;
  color: white;
  background-color: #374375;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #babce2;
  }
  float: right;
`;