import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Page = styled.div`
    text-align: center;
`;

export const Question = styled.h2`
    color: var(--main);
    font-style:italic;
    font-size: 50px;
`;

export const Options = styled.ul`
    list-style: none;
`;

export const Opt = styled.li`
    background-color: var(--main);
    border-color: 6px var(--main-transparent);
    border-radius: 20px;
    line-height: 2;
    font-size: 36px;
    margin-bottom: 10px;
`;

export const Number = styled.h3`
    text-align: left;
    padding-bottom: 10px;
    padding-top: 10px;
    color: var(--bg-main);
    font-size: 18px;
`;

export const Card = styled.div`
    margin: 0 auto;
    width: 50%; 
    height: 80%;
    padding-top: 10%;
    padding-bottom: 10%;
    border-radius: 20px;
    color: var(--main-transparent);
    font-size: 40px;
`;

export const StyledLink = styled(Link)`
    background-color: var(--accent);
    margin-top: 15px;
    border: none;
    color: white;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    line-height: 0.5;
    font-size: 16px;
    font-weight: bold;
    border-radius: 24px;
`;

export const Results = styled.div`
margin: 0 auto;
width: 30%;
height: 70px;
margin-top: 20%;
margin-bottom: 18%;
background: linear-gradient(var(--bg-main), var(--main));
padding: 5%;
border-radius: 16px;
color: white;
font-size: 36px;
font-style:italic;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
  rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;