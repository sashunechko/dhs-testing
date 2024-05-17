import React from "react"
import {Link} from "react-router-dom";
import { URLs } from "../../__data__/urls";

export function Nav(props) {
    return (
        <>
            <nav className="nav-lk">
                
                <button className="link-button"> 
                    <p className="link-contrast-button" >РЕЗУЛЬТАТЫ</p>
                </button>
                <button className="link-button"> 
                    <p className="link-contrast-button" >ЗАПИСИ</p>
                </button>
                <button className="link-button"> 
                    <Link className="link-contrast-button" to={URLs.ui.record}>ЗАПИСАТЬСЯ</Link>
                </button>
                
            </nav>
        </>
    )
}
