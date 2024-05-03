import styled from "@emotion/styled";

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
    flex-wrap:wrap;
    align-items: flex-end;
    justify-content: space-between;
`;

export const HeaderNav = styled.ul`
    display: flex;
    flex-wrap:wrap;
`;
export const LinkContrast = styled.a`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: #fff;
    margin-right: 82px;
    text-decoration: none;
    
    :hover, :focus, :active{
        opacity: .75;
    }
`;
