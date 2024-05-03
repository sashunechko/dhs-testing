import styled from "@emotion/styled";

export const StyledForm = styled.form`
    position: relative;
    width: 300px;
    margin: 0 auto;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 42px;
    padding-left: 10px;
    border: 2px solid;
    border-radius: 5px;
    outline: none;
    background: var(--text-contrast);
    color: var(--main);
`;

export const StyledButton = styled.button`
    position: absolute; 
    right: 0px;
    width: 84px;
    height: 42px;
    border: 2px solid;
    color: (var(--main));
    background: var(--text-contrast);
    border-radius: 0 5px 5px 0;
    cursor: pointer;
`;