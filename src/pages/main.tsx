import React from "react";

export const Main = () => {
  return (
    <>
    <header class="header">
        <div class="wrapper">
            <div class="header-wrapper">
            <img src="../img/svg/logo.svg" alt="Логотип. PsycologyTesting" class="header-logo-pic"/>
            <nav class="header-nav">
                <ul class="nav-list">
                    <li><a class="link-contrast" href="#01">ТЕСТЫ</a></li>
                    <li><a class="link-contrast" href="#02">ЛИЧНЫЙ КАБИНЕТ</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
    
    <main class="main-content">
        <div class="wrapper">
        <section class="card1">
            <img src="../img/svg/lotos.svg" alt="девушка в позе лотоса" />
            <div class="wrapper">
                    <h1 class="h1">О САЙТЕ</h1>
                    <p class="text1">
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
        <section class="card1">
            <h class="h">ОНЛАЙН ПСИХОЛОГИЧЕСКИЕ ТЕСТЫ</h>
            <p class="text2">
                Психологические тесты – это мощный 
                инструмент для самопознания. 
                Они помогают выявить личностные черты, 
                скрытые таланты, а также понять свои сильные 
                и слабые стороны. 
            </p>
            <img сlass="girl" src="../img/svg/girl.svg" alt="Спокойная девушка" />
            <button class="link-button"> 
                <a class="link-contrast-button" href="#03">К ТЕСТАМ!</a>
            </button>
        </section>
        <section class="card1">
            <h class="h">РЕГИСТРАЦИЯ И КОНСУЛЬТАЦИИ</h>
            <div class="content3">
                <button class="link-button1">
                    <a class="link-contrast-button" href="#04">РЕГИСТРАЦИЯ</a>
                </button>
            <p class="text3">дает возможность: сохранять и просматривать результаты тестирований, записываться  к специалисту, следить за графиком консультаций</p>
            </div>
            <img src="../img/svg/psyho.svg" alt="Консультация психолога" />
        </section>
        </div>
    </main>

    <footer class="footer">
        <div class="wrapper">
            <div class="header-wrapper">
            <img src="../img/svg/logo.svg" alt="Логотип. PsycologyTesting" class="header-logo-pic"/>
            <div class="footer-wrapper">
                <p class="text">created by</p>
                <a href="https://github.com/sashunechko/dhs-testing">
                    <img src="../img/svg/git.svg" alt="Логотип. Github" class="header-logo-pic"/>
                </a>
            </div>
            </div>
        </div>
    </footer>
</>
  );
};
export default Main;