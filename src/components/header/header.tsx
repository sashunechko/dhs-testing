import React from "react"

import {logo} from "../../img";

export class Header extends React.Component{
    render(){
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
            </>)
    }
}