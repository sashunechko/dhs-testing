import React from "react"

import { HeaderStyled, Wrapper, HeaderWrapper, HeaderList, StyledLink} from "./header.styled";

import {logo} from "../../img";

export function Header() {
    return (
        <>
        <HeaderStyled>
            <Wrapper>
                <HeaderWrapper>
                <img src={logo} alt="Логотип. PsycologyTesting"/>
                <nav>
                    <HeaderList>
                        <li><StyledLink href="#01">ТЕСТЫ</StyledLink></li>
                        <li><StyledLink href="#02">ЛИЧНЫЙ КАБИНЕТ</StyledLink></li>
                    </HeaderList>
                </nav>
                </HeaderWrapper>
            </Wrapper>
        </HeaderStyled>
        </>
    )
}