import styled from "@emotion/styled";

export const StyledPhoto = styled.div`
    display: block;
    align-items: center;
`;

export const BgPhoto = styled.div`
    border-radius: 74px;
    width: 400px;
    height: 400px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: rgba(255, 252, 245, 0.27);
    align-content: center;
    align-items: center;
    padding-left: 58px;
    margin-bottom: 28px;
`;

export const BgBio = styled.div`
    border-radius: 69px;
    width: 700px;
    height: 400px;
    background: var(--main-transparent);
`;

export const Info = styled.div`
    display: block;
    align-items:center;
    padding-left: 75px;
    padding-top: 61px;
    justify-content: space-between;
`;

export const Box = styled.input`
    width: 550px;
    height: 65px;
    background-color: #D9D9D9;
    font-weight: 500;
    font-size: 26px;
    color: var(--main);
    margin-bottom: 48px;
`;

export const RedButton = styled.button`
    border-radius: 118px;
    width: 375px;
    height: 70px;
    background-color: (--accent);
    font-weight: 500;
    font-size: 26px;
    color: var(--main);
    margin-bottom: 71px;
`;

export const Button = styled.button`
    margin-left: 40px;
    width: 310px;
    height: 59px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: var(--main);
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: var(--main-transparent);
`;