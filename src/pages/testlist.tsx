import React from "react";

import '../css/style.css';

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {List} from "../components/list-of-tests";

import { header} from '../img';

export const Testlist = () => {
  return (
    <>

    <Header/>

    <p className="pic">
        <img src={header} alt="Девушка разговаривает с психологом." width="60%"
        height="420px"/>
    </p>

    <h1 className="hh">ТЕСТЫ ОНЛАЙН</h1>

    <form className="search-form">
        <input placeholder="Поиск по тестам..." type="search" className="search-input"/>
        <button type="submit" className="search-button">Найти</button>
    </form>

    <p className="sort">
        <label htmlFor="filter">Фильтр</label>
        <select id="filter" name="filter">
            <option value="Диагностика расстройств">Диагностика расстройств</option>
            <option value="На тип личности">На тип личности</option>
            <option value="Интеллектуальные">Интеллектуальные</option>
            <option value="Быстрые">Быстрые</option>
        </select>

        <label htmlFor="sort">Сортировать</label>
        <select id="sort" name="sort">
            <option value="По алфавиту">По алфавиту</option>
            <option value="По времени выполнения">По времени выполнения</option>
        </select>

    </p>

    <List/>

<Footer/>

</>
  );
};
export default Testlist;