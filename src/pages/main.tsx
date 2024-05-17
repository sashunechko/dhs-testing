import React from "react";
import {Link} from 'react-router-dom';

import {Header} from "../components/header";
import {Image1} from "../components/im1";
import {TextBlock1} from "../components/tb1";
import {Title} from "../components/title";
import {Par1} from "../components/paragraph1";
import {Par2} from "../components/par2";
import {Button} from "../components/button";
import {RegButton} from "../components/regbutt";
import {Footer} from "../components/footer";

import { URLs } from "../__data__/urls";

const nav = {
    testlist: { title: "К ТЕСТАМ!", href: URLs.ui.testlist },
    lk: { title: "ЛИЧНЫЙ КАБИНЕТ", href: URLs.ui.lk },
    reg: { title: "РЕГИСТРАЦИЯ", href: URLs.ui.registration },
}


import { lotos} from '../img';
import { girl} from '../img';
import { psyho} from '../img';

export const Main = () => {
  return (
    <>
    <Header/>
    
    <main className="main-content">
        <div className="wrapper">

        <section className="card1">
        <Image1 src={lotos} alt="девушка в позе лотоса" />
        <TextBlock1
            title="О САЙТЕ"
            description="Добро пожаловать на сайт, посвященный психологическим тестам! Здесь вы найдете широкий выбор тестов, которые помогут вам лучше понять себя, свои эмоции, поведение и отношения с окружающими."
        />
        </section>

        <section className="card1">
            <Title text="ОНЛАЙН ПСИХОЛОГИЧЕСКИЕ ТЕСТЫ" />
            <Par1 text="Психологические тесты – это мощный инструмент для самопознания. Они помогают выявить личностные черты, скрытые таланты, а также понять свои сильные и слабые стороны." />
            <Image1 src={girl} alt="Спокойная девушка" />
            <Button text={nav.testlist.title} href={nav.testlist.href} />
        </section>

        <section className="card1">
            <Title text="РЕГИСТРАЦИЯ И КОНСУЛЬТАЦИИ" />
            <div className="content3">
                <RegButton text={nav.reg.title} href={nav.reg.href} />
                <Par2 text="дает возможность: сохранять и просматривать результаты тестирований, записываться к специалисту, следить за графиком консультаций" />
            </div>
            <Image1 src={psyho} alt="Консультация психолога" />
        </section>
        
        </div>
    </main>

    <Footer/>
</>
  );
};
export default Main;