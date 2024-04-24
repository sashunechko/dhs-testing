import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";

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
            <img src={lotos} alt="девушка в позе лотоса" />
            <div className="wrapper">
                    <h1 className="h1">О САЙТЕ</h1>
                    <p className="text1">
                        Добро пожаловать на сайт, 
                        посвященный психологическим 
                        тестам! Здесь вы найдете широкий 
                        выбор тестов, которые помогут 
                        вам лучше понять себя, свои 
                        эмоции, поведение и отношения 
                        с окружающими.
                    </p>
            </div>
        </section>
        <section className="card1">
            <h1 className="h">ОНЛАЙН ПСИХОЛОГИЧЕСКИЕ ТЕСТЫ</h1>
            <p className="text2">
                Психологические тесты – это мощный 
                инструмент для самопознания. 
                Они помогают выявить личностные черты, 
                скрытые таланты, а также понять свои сильные 
                и слабые стороны. 
            </p>
            <img className="girl" src={girl} alt="Спокойная девушка" />
            <button className="link-button"> 
                <a className="link-contrast-button" href="#03">К ТЕСТАМ!</a>
            </button>
        </section>
        <section className="card1">
            <h1 className="h">РЕГИСТРАЦИЯ И КОНСУЛЬТАЦИИ</h1>
            <div className="content3">
                <button className="link-button1">
                    <a className="link-contrast-button" href="#04">РЕГИСТРАЦИЯ</a>
                </button>
            <p className="text3">дает возможность: сохранять и просматривать результаты тестирований, записываться  к специалисту, следить за графиком консультаций</p>
            </div>
            <img src={psyho} alt="Консультация психолога" />
        </section>
        </div>
    </main>

    <Footer/>
</>
  );
};
export default Main;