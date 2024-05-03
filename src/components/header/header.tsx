import React from "react"

<<<<<<< HEAD
import { HeaderStyled, Wrapper, HeaderWrapper, HeaderList, StyledLink} from "./header.styled";
=======
import './header.styled';
>>>>>>> dac0d4f27d8fb3092f3cfa8a6ada9e8b0eff8ba3

import {logo} from "../../img";
import { HeaderBlock, HeaderNav, HeaderWrapper, LinkContrast, Wrapper } from "./header.styled";

<<<<<<< HEAD
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
=======
export class Header extends React.Component{
    render(){
        return (
            <>
            <HeaderBlock>
                <Wrapper>
                    <HeaderWrapper>
                    <img src={logo} alt="Логотип. PsycologyTesting"/>
                    <nav>
                        <HeaderNav>
                            <li><LinkContrast href="#01">ТЕСТЫ</LinkContrast></li>
                            <li><LinkContrast href="#02">ЛИЧНЫЙ КАБИНЕТ</LinkContrast></li>
                        </HeaderNav>
                    </nav>
                    </HeaderWrapper>
                </Wrapper>
            </HeaderBlock>   
            </>
            )
    }
>>>>>>> dac0d4f27d8fb3092f3cfa8a6ada9e8b0eff8ba3
}