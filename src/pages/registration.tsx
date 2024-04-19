import React from "react";

import { logo} from '../img';
import { git} from '../img';

export const Reg = () => {
  return (
    <>
    <header className="header">
        <div className="wrapper">
            <div className="header-wrapper">
            <img src={logo} alt="Логотип. PsycologyTesting" className="header-logo-pic"/>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li><a className="link-contrast" href="#01">ТЕСТЫ</a></li>
                    <li><a className="link-contrast" href="#02">ЛИЧНЫЙ КАБИНЕТ</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>

    <div className="reg">
            <div className="bg-reg">
                <h1 className="hh">Регистрация</h1>
                <div className="reg-info">
                    <input className="box1" type="email" placeholder="Email" name="email" required/>
                    <input className="box1" type="password" placeholder="Пароль" name="password" required/>
                    <button className="red-button" type="submit" form="id-info">Зарегистрироваться</button>
                </div>
                <a href="">Вход</a>
            </div>
    </div>

<footer className="footer">
    <div className="wrapper">
        <div className="header-wrapper">
        <img src="../img/svg/logo.svg" alt="Логотип. PsycologyTesting" className="header-logo-pic"/>
        <div className="footer-wrapper">
            <p className="text">created by</p>
            <a href="https://github.com/sashunechko/dhs-testing">
                <img src={git} alt="Логотип. Github" className="header-logo-pic"/>
            </a>
        </div>
        </div>
    </div>
</footer>
    </>
  );
};
export default Reg;