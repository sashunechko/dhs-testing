import React from "react";

export const Rec = () => {
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
        <div className="bio">
            <div className="bg-record">
                <div className="info">
                    <input className="box1" type="text" placeholder="Фамилия Имя" name="name" required/>
                    <input className="box1" type="number" placeholder="+7(999)999 99 99" name="phone" required/>
                    <input className="box1" type="date" placeholder="дд.мм.гггг" name="date" required/>
                    <input className="box1" type="time" placeholder="12-00" name="time" min="09:00" max="18:00" required/>
                    <select className="box1" id="специалист" name="фио специалиста">
                        <option value="1">Иванов</option>
                        <option value="2">Петров</option>
                        <option value="3">Сидоров</option>
                    </select>
                    <button className="red-button" type="submit" form="id-info">записаться</button>
                </div>
            </div>
            <img src="../img/svg/record.svg" alt="Улыбающаяся девушка на фоне листьев" width="50%" />
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
export default Rec;