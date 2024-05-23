import React, { useState, useEffect } from "react";
import { StyledSort } from "./filters.styled";

export function Filter() {
    // const [sortValue, setSortValue] = useState("По алфавиту");
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('/api/tests-data')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data.titles);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching test data:', error);
    //         });
    // }, []);

    // const handleSortChange = (event) => {
    //     setSortValue(event.value);

    //     if (event.value === "По алфавиту") {
    //         const sortedData = data.slice().sort((a, b) => {
    //             return a.name.localeCompare(b.name); // Сортировка по алфавиту
    //         });
    //         setData(sortedData);
    //     } else if (event.value === "По времени выполнения") {
    //         const sortedData = data.slice().sort((a, b) => {
    //             return a.executionTime - b.executionTime; // для сортировки по времени выполнения
    //         });
    //         setData(sortedData);
    //     }
    // };

    return (
        <>
            <StyledSort>
                <label htmlFor="filter">Фильтр</label>
                <select id="filter" name="filter">
                    <option value="Диагностика расстройств">Диагностика расстройств</option>
                    <option value="На тип личности">На тип личности</option>
                    <option value="Интеллектуальные">Интеллектуальные</option>
                    <option value="Быстрые">Быстрые</option>
                </select>

                <label htmlFor="sort">Сортировать</label>
                <select id="sort" name="sort" 
                // value={sortValue} 
                // onChange={handleSortChange}
                >
                    <option value="По алфавиту">По алфавиту</option>
                    <option value="По времени выполнения">По времени выполнения</option>
                </select>
            </StyledSort>

            {/* <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name} - Время выполнения: {item.executionTime}</li>
                ))}
            </ul> */}
        </>
    );
}
