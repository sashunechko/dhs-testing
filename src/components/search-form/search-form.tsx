import React from "react"

import { StyledForm, StyledButton, StyledInput} from "./search-form.styled";

export function Search() {
    return (
        <>
        <StyledForm>
            <StyledInput placeholder="Поиск по тестам..." type="search"/>
            <StyledButton type="submit">Найти</StyledButton>
        </StyledForm>
        </>
    )
}