import React from "react"

export class Filter extends React.Component{
    render(){
        return (
            <>
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
            </>
            )
    }
}