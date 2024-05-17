import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const HeaderBlock = styled.header`
    background-color: #374375;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
`;

export const Wrapper = styled.div`
    max-width: 1295px;
    margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 32px;
    color: #fff;
    text-decoration: none;

    :hover, :focus, :active{
        opacity: .75;
    }
`;