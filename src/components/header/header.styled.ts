import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const HeaderBlock = styled.header`
    background-color: var(--main);
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index:2;
`;

export const Wrapper = styled.div`
    max-width: 1295px;
    margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: flex-end;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 32px;
    color: var(--text-contrast);
    text-decoration: none;
    margin-left:40px;
    :hover, :focus, :active{
        opacity: .75;
    }
`;

export const LocalesButton = styled.button`
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #fff; 
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    margin-left: 15px;
`;