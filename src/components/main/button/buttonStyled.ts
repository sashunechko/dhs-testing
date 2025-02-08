import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const LinkButton = styled.button`
    margin-top: 179px;
    width: 367px;
    height: 92px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    text-align: center;
`;

export const LinkContrastButton = styled(Link)`
    /* font-family: 'Inter'; */
    font-weight: 500;
    font-size: 32px;
    color: var(--text-contrast);
    text-decoration: none;
    vertical-align: middle;
    :hover, :focus, :active{
        opacity: .75;
    }
`;