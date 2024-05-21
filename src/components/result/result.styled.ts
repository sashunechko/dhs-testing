import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Section = styled.section`
    width: 1355px;
    height: 800px;
    display: flex;
    flex-wrap:wrap;
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    flex-direction: row;
`;

export const StyledRes = styled.h1`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: var(--main);
`;

export const StyledText = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 22px;
    color: var(--main);
    max-width: 700px;
    text-align: justify; 
`;

export const StyledDesc = styled.div`
    display: block;
    flex-wrap:wrap;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto; 
`;

export const Tip = styled.div`
    border-radius: 138px;
    width: 512px;
    height: 208px;
    background: var(--text-contrast);
    margin-bottom: 70px;
`;

export const StyledTip = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    color: var(--main);
    max-width: 315px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
`;

export const StyledLink = styled(Link)`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    color: var(--brand);
    margin-left: 190px;
`;