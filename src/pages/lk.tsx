import React from "react";

import { logo} from '../img';
import { person} from '../img';
import { git} from '../img';

export const Lk = () => {
  return (
    <>
    <header className="header">
        <div className="wrapper">
            <div className="header-wrapper">
            <img src={logo} alt="Логотип. PsycologyTesting" className="header-logo-pic"/>
            <nav className="header-nav">
                <ul className="nav-list">
                    <li><a className="link-contrast" href="#01">ТЕСТЫ</a></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
    <main className="main-content">
        <div className="wrapper">
            <div className="bio">
                <div className="photo">
                    <div className="bg-photo">
                        <img src={person} alt="Иконка фото профиля" />
                    </div>
                </div>
                
                <div className="bg-bio">
                    <div className="info">
                        <input className="box" type="text" placeholder="Фамилия Имя" name="name" required/>
                        <input className="box" type="date" placeholder="дд.мм.гггг" name="date" required/>
                        <button className="red-button" type="submit" form="id-info">сохранить изменения</button>
                    </div> 
                    <button className="button" >
                        <p className="text-button-mini">редактировать данные</p>
                    </button>
                </div>
            </div>
            <button className="button" type="submit" form="id-info" >
                <input type="file" id="imageInput" accept="image/*" />
            </button>
        </div>
    </main>
    <nav className="nav-lk">
        
        <button className="link-button"> 
            <p className="link-contrast-button" >РЕЗУЛЬТАТЫ</p>
        </button>
        <button className="link-button"> 
            <p className="link-contrast-button" >ЗАПИСИ</p>
        </button>
        <button className="link-button"> 
            <a className="link-contrast-button" href="#запись">ЗАПИСАТЬСЯ</a>
        </button>
        
    </nav>
    <footer className="footer">
    <div className="wrapper">
        <div className="header-wrapper">
        <img src={logo} alt="Логотип. PsycologyTesting" className="header-logo-pic"/>
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
export default Lk;