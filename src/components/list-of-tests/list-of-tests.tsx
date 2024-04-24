import React from "react"

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
    <div className="rectangle text_center">
        <a href="">{test}</a>
    </div>
);

export class List extends React.Component{
    render() {
        return (
            <>
                <div className="table">
                    {listTests}         
                </div>
            </>
        )
    }
}