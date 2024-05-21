import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const StyledNav = styled.nav`
    margin-bottom: 120px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    max-width: 1297px;
`;

export const Button = styled.button`
    margin-top: 90px;
    width: 367px;
    height: 92px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: var(--main);
    text-align: center;
`;

export const LinkContrast = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 32px;
    color: var(--text-contrast);
    text-decoration: none;
    vertical-align: middle;
`;

export const StyledLink = styled(Link)`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 32px;
    color: var(--text-contrast);
    text-decoration: none;
    vertical-align: middle;
`;