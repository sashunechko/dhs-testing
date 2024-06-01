import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Section = styled.section`
    width: 100% - 40px;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
    margin-left: 20px;
    margin-right:20px;
    margin-bottom: 50px;
    flex-direction: row;
    padding-top:20px;
`;

export const StyledRes = styled.p`
    padding-top: 150px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 50px;
    font-style: italic;
    margin-left:20px;
    text-align: left;
    color: var(--main);
`;

export const StyledText = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 22px;
    color: var(--main);
    text-align: justify; 
`;

export const StyledDesc = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-top: 40px;
    // margin-left: auto;
    // margin-right: auto; 
`;

export const Tip = styled.div`
    margin-left: 160px;
    margin-top: 130px;
    border-radius: 138px;
    width: 512px;
    height: 208px;
    background: var(--accent);
    margin-bottom: 70px;
    text-align: center;
`;

export const StyledTip = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    color: var(--main);
    max-width: 315px;
    text-align: center;
    padding-top: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledLink = styled(Link)`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    color: var(--brand);
`;