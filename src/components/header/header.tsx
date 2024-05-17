import React from "react";
import {Link} from "react-router-dom";

import './header.styled';

import {logo} from "../../img";
import { HeaderBlock, HeaderWrapper, StyledLink, Wrapper } from "./header.styled";

import { URLs } from "../../__data__/urls";

const nav = {
    testlist: { title: "ТЕСТЫ", href: URLs.ui.testlist },
    lk: { title: "ЛИЧНЫЙ КАБИНЕТ", href: URLs.ui.lk }
}

export class Header extends React.Component{
    render(){
        return (
            <>
            <HeaderBlock>
                <Wrapper>
                    <HeaderWrapper>
                    <img src={logo} alt="Логотип. PsycologyTesting"/>
                    <nav>
                        URLs.ui.testlist && (<StyledLink to={nav.testlist.href}>{nav.testlist.title}</StyledLink>)
                        URLs.ui.lk && (<StyledLink to={nav.lk.href}>{nav.lk.title}</StyledLink>)
                    </nav>
                    </HeaderWrapper>
                </Wrapper>
            </HeaderBlock>   
            </>
            )
    }
}