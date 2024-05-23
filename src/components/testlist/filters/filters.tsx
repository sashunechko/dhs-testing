import React, { useState } from "react";
import { StyledSort } from "./filters.styled";

export function Filter() {
    const [sortValue, setSortValue] = useState("По алфавиту");
    const [data, setData] = useState([
            { id: 1, name: "Тест на самооценку", executionTime: 30 },
            { id: 2, name: "Какой у Вас тип мышления?", executionTime: 20 },
            { id: 3, name: "Экспресс IQ-тест", executionTime: 25 },
            { id: 4, name: "Определение уровня депрессии", executionTime: 35 },
            { id: 5, name: "Есть ли у Вас РПП?", executionTime: 15 },
            { id: 6, name: "Тест на скрытый нарциссизм", executionTime: 40 },
            { id: 7, name: "Диагностика выгорания", executionTime: 30 },
            { id: 8, name: "Тест на уверенность в себе", executionTime: 20 },
            { id: 9, name: "Диагностика ОКР", executionTime: 25 },
            { id: 10, name: "Насколько Вы тревожны?", executionTime: 35 },
            { id: 11, name: "Тест на СДВГ", executionTime: 15 },
            { id: 12, name: "Ваш тип привязанности", executionTime: 25 }
    ]);

    const handleSortChange = (event) => {
        setSortValue(event.target.value);

        if (event.target.value === "По алфавиту") {
            const sortedData = data.slice().sort((a, b) => {
                return a.name.localeCompare(b.name); // Сортировка по алфавиту
            });
            setData(sortedData);
        } else if (event.target.value === "По времени выполнения") {
            const sortedData = data.slice().sort((a, b) => {
                return a.executionTime - b.executionTime; // для сортировки по времени выполнения
            });
            setData(sortedData);
        }
    };

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
                <select id="sort" name="sort" value={sortValue} onChange={handleSortChange}>
                    <option value="По алфавиту">По алфавиту</option>
                    <option value="По времени выполнения">По времени выполнения</option>
                </select>
            </StyledSort>

            {/* Отобразите отсортированные данные */}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            {/* Отобразите отсортированные данные */}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name} - Время выполнения: {item.executionTime}</li>
                ))}
            </ul>
        </>
    );
}
