import React from "react"

import { Wrapper, HeaderWrapper, StyledFooter, FooterWrapper, Text} from "./footer.styled";

import {git} from '../../assets';
import {logo} from '../../assets';

export function Footer() {
        return (
            <>
            <StyledFooter>
                <Wrapper>
                    <HeaderWrapper>
                    <img src={logo} alt="Логотип. PsycologyTesting"/>
                    <FooterWrapper>
                        <Text>created by</Text>
                        <a href="https://github.com/sashunechko/dhs-testing">
                            <img src={git} alt="Логотип. Github"/>
                        </a>
                    </FooterWrapper>
                    </HeaderWrapper>
                </Wrapper>
            </StyledFooter>
            </>
        )
}