import React from "react";
import {Link} from "react-router-dom";

import './header.styled';

import {logo} from "../../assets";
import { HeaderBlock, HeaderWrapper, LocalesButton, StyledLink, Wrapper } from "./header.styled";

import { URLs } from "../../__data__/urls";
import { useTranslation } from 'react-i18next'

const nav = {
    testlist: { title: "ТЕСТЫ", href: URLs.ui.testlist },
    lk: { title: "ЛИЧНЫЙ КАБИНЕТ", href: URLs.ui.account },
    enter: { title: "ВХОД", href: URLs.ui.enter }
}

const changeLanguageToRu = () => {
    // i18n.changeLanguage('ru')
}

const changeLanguageToEn = () => {
    // i18n.changeLanguage('en')
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
                        <LocalesButton onClick={changeLanguageToRu}>ru</LocalesButton>
                        <LocalesButton onClick={changeLanguageToEn}>en</LocalesButton>
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