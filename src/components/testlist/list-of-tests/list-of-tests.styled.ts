import styled from "@emotion/styled";
import {Link} from 'react-router-dom';

export const StyledRectangle = styled.div`
    width: 98%;
    height: 70px;
    border-radius: 138px;
    border: 1px solid;
    margin-left: 1%;
    margin-bottom: 5%;
    background: var(--main-transparent);
    color: var(--text);
    text-align: center;
    line-height: 70px;
`;

export const Table = styled.div`
    columns: 2;
`;

export const StyledLink = styled(Link)`
    color: var(--main);
    text-decoration: underline;
`;