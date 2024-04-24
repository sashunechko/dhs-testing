import React from "react"

import {git} from '../../img';
import {logo} from '../../img';

export class Footer extends React.Component{
    render(){
        return (
            <>
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
            </>)
    }
}