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
export const EmptyBox = styled.div`
    width: 527px;
    max-height: 1000px;
    display: block;
    align-items: center;
    margin-left: 50px;
`

export const WhiteBox = styled.div`
    border-radius: 138px;
    width: 527px;
    height: 134px;
    background: #fff;
    margin-top: 100px;
    margin-bottom:50px;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const TextWhiteBox = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 32px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #374375;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin-left: auto;
    margin-right: auto;
`;