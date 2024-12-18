import React, {useEffect, useState} from "react";

import {Table, StyledRectangle, StyledLink} from "./list-of-tests.styled";
import {StyledSort} from "../filters/filters.styled";
import {StyledForm, StyledInput} from "../search-form/search-form.styled";
import {URLs} from "../../../__data__/urls";
import { mainApi } from "../../../__data__/service/main-api";

export function List() {
    const testData = mainApi.useGetTestDataQuery().data
    const titles = testData?.titles

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setData(titles)
    }, [titles])

    const [sortValue, setSortValue] = useState("По алфавиту");
    const [filterValue, setFilterValue] = useState("Без фильтра");

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

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
        if (event.target.value === "Без фильтра") {
            setData(titles);
        } else {
            const res = titles.filter(test => test.filter === event.target.value);
            setData(res);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    console.log(data)
    const filteredData = data?.filter(test =>
        test.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <StyledSort>
                <label htmlFor="filter">Фильтр</label>
                <select id="filter" name="filter" value={filterValue} onChange={handleFilterChange}>
                    <option value="Без фильтра">Без фильтра</option>
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
            </StyledForm>

            <Table>
                {filteredData?.map(test => 
                    <StyledRectangle key={test.id}>
                        <StyledLink to={`${URLs.ui.q}?id=${test.id}`}>{test.name} ( {test.executionTime} мин. ) </StyledLink>
                    </StyledRectangle>
                )}
            </Table>
        </>
    );
}
