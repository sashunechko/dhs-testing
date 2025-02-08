import React from "react";
import {Link} from "react-router-dom";

import './header.styled';

import {logo} from "../../assets";
import { HeaderBlock, HeaderWrapper, LocalesButton, StyledLink, Wrapper } from "./header.styled";

import { URLs } from "../../__data__/urls";
import i18n from "../../i18n";

const nav = {
    testlist: { title: "Тесты", href: URLs.ui.testlist },
    lk: { title: "ЛИЧНЫЙ КАБИНЕТ", href: URLs.ui.account },
    enter: { title: "ВХОД", href: URLs.ui.enter }
}

export function Header() {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        console.log(lng)
    };

    return (
        <>
        <HeaderBlock>
            <Wrapper>
                <HeaderWrapper>
                <Link to={URLs.ui.main}>
                            <img src={logo} alt="Логотип. PsycologyTesting"/>
                </Link>
                <nav>
                    <StyledLink to={nav.testlist.href}>{i18n.t('tests')}</StyledLink>
                    <StyledLink to={nav.lk.href}>{i18n.t('account')}</StyledLink>
                    <LocalesButton onClick={() => changeLanguage('ru')}>ru</LocalesButton>
                    <LocalesButton onClick={() => changeLanguage('en')}>en</LocalesButton>
                </nav>
                </HeaderWrapper>
            </Wrapper>
        </HeaderBlock>   
        </>
        )
}