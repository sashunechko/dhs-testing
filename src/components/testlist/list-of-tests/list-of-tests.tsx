import React from "react"

import {Table, StyledRectangle, StyledLink} from "./list-of-tests.styled";

const data = [
    "Тест на самооценку",
    "Какой у Вас тип мышления?",
    "Экспресс IQ-тест",
    "Определение уровня депрессии",
    "Есть ли у Вас РПП?",
    "Тест на скрытый нарциссизм",
    "Диагностика выгорания",
    "Тест на уверенность в себе",
    "Диагностика ОКР",
    "Насколько Вы тревожны?",
    "Тест на СДВГ",
    "Ваш тип привязанности"
]

const listTests = data.map(test => 
    <StyledRectangle>
        <StyledLink to="#Q">{test}</StyledLink>
    </StyledRectangle>
);

export function List() {
        return (
            <>
                <Table>
                    {listTests}         
                </Table>
            </>
        )
}