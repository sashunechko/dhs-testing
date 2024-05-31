import styled from "@emotion/styled";

export const StyledForm = styled.div`
    font-family: 'Inter';
    padding-top: 180px;
    margin-bottom: 28px;
    align-items: center;
    text-align: center;
    align-content: center;
`;

export const StyledBg = styled.div`
    margin-left:auto;
    margin-right:auto;
    border-radius: 69px;
    width: 700px;
    height: 550px;
    background: var(--main-transparent);
    text-align: center;
`;

export const StyledHeader = styled.h1`
    font-family: 'Inter';
    font-size: 36px;
    color: var(--main);
    padding-top: 42px;
    margin-bottom: 48px;
`;

export const StyledInfo = styled.div`
    display: block;
    justify-content: space-between;
`;

export const StyledInput = styled.input`
    width: 375px;
    height: 65px;
    background-color: #D9D9D9;
    font-weight: 500;
    font-size: 26px;
    color: var(--main);
    margin-bottom: 40px;
`;

export const StyledButton = styled.button`
    border-radius: 118px;
    width: 375px;
    height: 70px;
    background-color: #dfaea0;
    font-weight: 500;
    font-size: 26px;
    color: car(--main);
    margin-bottom: 40px;
`;

export const RoleErrorMessage = styled.div`
  color: var(--brand);
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: var(--brand);
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
  width: 100%;
`;
export const Blank = styled.p`
    color: var(--main-transparent);
    font-size: 15px;
    margin-bottom: 5px;
    width: 100%;
`;