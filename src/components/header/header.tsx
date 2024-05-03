import React from "react"

import './header.styled';

import {logo} from "../../img";
import { HeaderBlock, HeaderNav, HeaderWrapper, LinkContrast, Wrapper } from "./header.styled";

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
}