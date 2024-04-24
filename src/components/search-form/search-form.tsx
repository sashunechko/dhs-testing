import React from "react"

export class Search extends React.Component{
    render(){
        return (
            <>
            <form className="search-form">
                <input placeholder="Поиск по тестам..." type="search" className="search-input"/>
                <button type="submit" className="search-button">Найти</button>
            </form>
            </>
            )
    }
}