import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
    backdrop-filter: blur(10px);
    background-color: var(--bg-main);
    left:0;
    bottom:0;
`;

export const Wrapper = styled.div`
    max-width: 1295px;
    margin: 0 auto;
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: flex-end;
    justify-content: right;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: var(--main);
    vertical-align: middle;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: flex-end;
    justify-content: space-between;
`;