import React from "react"

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
                    <a className="link-contrast-button" href="#запись">ЗАПИСАТЬСЯ</a>
                </button>
                
            </nav>
        </>
    )
}
