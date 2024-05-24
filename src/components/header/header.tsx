import React from "react";
import {Link} from "react-router-dom";

import './header.styled';

import {logo} from "../../assets";
import { HeaderBlock, HeaderWrapper, StyledLink, Wrapper } from "./header.styled";

import { URLs } from "../../__data__/urls";

const nav = {
    testlist: { title: "ТЕСТЫ", href: URLs.ui.testlist },
    lk: { title: "ЛИЧНЫЙ КАБИНЕТ", href: URLs.ui.lk },
    enter: { title: "ВХОД", href: URLs.ui.enter }
}

export class Header extends React.Component{
    render(){
        return (
            <>
            <HeaderBlock>
                <Wrapper>
                    <HeaderWrapper>
                    <Link to={URLs.ui.main}>
                                <img src={logo} alt="Логотип. PsycologyTesting"/>
                    </Link>
                    <nav>
                        <StyledLink to={nav.testlist.href}>{nav.testlist.title}</StyledLink>
                        <StyledLink to={nav.lk.href}>{nav.lk.title}</StyledLink>
                    </nav>
                    </HeaderWrapper>
                </Wrapper>
            </HeaderBlock>   
            </>
            )
    }
}