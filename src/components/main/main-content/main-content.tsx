import React from "react";
import {Link} from "react-router-dom";

import { Card, Content } from "./main-content.styled";

import {Image1} from "../image";
import {TextBlock1} from "../text-block";
import {Title} from "../title";
import {ParTwo} from "../par-two";
import {Par} from "../par-one";
import {Button} from "../button";
import {RegButton} from "../reg-button";
import {MainContent, Wrapper} from '../../lk/main-lk/main.styled';
import { URLs } from "../../../__data__/urls";

const nav = {
    testlist: { title: "К ТЕСТАМ!", href: URLs.ui.testlist },
    lk: { title: "ЛИЧНЫЙ КАБИНЕТ", href: URLs.ui.lk },
    reg: { title: "РЕГИСТРАЦИЯ", href: URLs.ui.registration },
}

import { lotos} from '../../../img';
import { girl} from '../../../img';
import { psyho} from '../../../img';

export class MainBody extends React.Component{
    render(){
        return (
            <>
            <MainContent>
                <Wrapper>

                <Card>
                <Image1 src={lotos} alt="девушка в позе лотоса" />
                <TextBlock1
                    title="О САЙТЕ"
                    description="Добро пожаловать на сайт, посвященный психологическим тестам! Здесь вы найдете широкий выбор тестов, которые помогут вам лучше понять себя, свои эмоции, поведение и отношения с окружающими."
                />
                </Card>

                <Card>
                    <Title text="ОНЛАЙН ПСИХОЛОГИЧЕСКИЕ ТЕСТЫ" />
                    <ParTwo text="Психологические тесты – это мощный инструмент для самопознания. Они помогают выявить личностные черты, скрытые таланты, а также понять свои сильные и слабые стороны." />
                    <Image1 src={girl} alt="Спокойная девушка" />
                    <Button text={nav.testlist.title} href={nav.testlist.href} />
                </Card>

                <Card>
                    <Title text="РЕГИСТРАЦИЯ И КОНСУЛЬТАЦИИ" />
                    <Content>
                        <RegButton text={nav.reg.title} href={nav.reg.href} />
                        <Par text="дает возможность: сохранять и просматривать результаты тестирований, записываться к специалисту, следить за графиком консультаций" />
                    </Content>
                    <Image1 src={psyho} alt="Консультация психолога" />
                </Card>
                
                </Wrapper>
            </MainContent>  
            </>
        )
    }
}