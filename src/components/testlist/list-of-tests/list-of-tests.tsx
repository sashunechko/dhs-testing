import React, {useState, useEffect} from "react";

import {Table, StyledRectangle, StyledLink} from "./list-of-tests.styled";
import {StyledSort} from "../filters/filters.styled";
import {StyledForm, StyledButton, StyledInput} from "../search-form/search-form.styled";
import {URLs} from "../../../__data__/urls";

export function List() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch('/api/tests-data')
            .then(response => response.json())
            .then(data => {
                setData(data.titles);
            })
            .catch(error => {
                console.error('Error fetching test data:', error);
            });
    }, []);

    const [sortValue, setSortValue] = useState("По алфавиту");

    const handleSortChange = (event) => {
        setSortValue(event.target.value);
        if (event.target.value === "По алфавиту") {
            const sortedData = data.slice().sort((a, b) => a.name.localeCompare(b.name));
            setData(sortedData);
        } else if (event.target.value === "По времени выполнения") {
            const sortedData = data.slice().sort((a, b) => a.executionTime - b.executionTime);
            setData(sortedData);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter(test =>
        test.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <StyledSort>
                <label htmlFor="filter">Фильтр</label>
                <select id="filter" name="filter" >
                    <option value="Диагностика расстройств">Диагностика расстройств</option>
                    <option value="На тип личности">На тип личности</option>
                    <option value="Интеллектуальные">Интеллектуальные</option>
                    <option value="Быстрые">Быстрые</option>
                </select>

                <label htmlFor="sort">Сортировать</label>
                <select id="sort" name="sort" 
                    value={sortValue} 
                    onChange={handleSortChange}
                >
                    <option value="По алфавиту">По алфавиту</option>
                    <option value="По времени выполнения">По времени выполнения</option>
                </select>
            </StyledSort>

            <StyledForm>
                <StyledInput
                    placeholder="Поиск по тестам..."
                    type="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <StyledButton type="submit">Найти</StyledButton>
            </StyledForm>

            <Table>
                {filteredData.map(test => 
                    <StyledRectangle key={test.id}>
                        <StyledLink to={URLs.ui.q}>{test.name} ( {test.executionTime} мин. ) </StyledLink>
                    </StyledRectangle>
                )}
            </Table>
        </>
    );
}
