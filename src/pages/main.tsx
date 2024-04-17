import React from "react";

export const Main = () => {
  return (
    <>
    <header className="header">
        <div className="wrapper">
            <div className="header-wrapper">
            <img src="../img/svg/logo.svg" alt="Логотип. PsycologyTesting" className="header-logo-pic"/>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li><a className="link-contrast" href="#01">ТЕСТЫ</a></li>
                    <li><a className="link-contrast" href="#02">ЛИЧНЫЙ КАБИНЕТ</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
    
    <main className="main-content">
        <div className="wrapper">
        <section className="card1">
            <img src="../img/svg/lotos.svg" alt="девушка в позе лотоса" />
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
            <img className="girl" src="../img/svg/girl.svg" alt="Спокойная девушка" />
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
            <img src="../img/svg/psyho.svg" alt="Консультация психолога" />
        </section>
        </div>
    </main>

    <footer className="footer">
        <div className="wrapper">
            <div className="header-wrapper">
            <img src="../img/svg/logo.svg" alt="Логотип. PsycologyTesting" className="header-logo-pic"/>
            <div className="footer-wrapper">
                <p className="text">created by</p>
                <a href="https://github.com/sashunechko/dhs-testing">
                    <img src="../img/svg/git.svg" alt="Логотип. Github" className="header-logo-pic"/>
                </a>
            </div>
            </div>
        </div>
    </footer>
</>
  );
};
export default Main;