import React from "react"
import { URLs } from "../../../__data__/urls";
import { useEffect } from "react";
import {useState} from "react";
import {StyledNav, Button, LinkContrast, StyledLink, WhiteBox, TextWhiteBox, EmptyBox, PaleBox, Container,CalendarContainer,PaleBoxContainer} from './nav-lk.styled';
import Calendar from 'react-calendar';

export function Nav() {
    const [data, setData] = useState([]);
    const [resultName, setResultName] = useState([]);
    {/*const [clickCount, setClickCount] = useState(0);*/}

    const [recordDates, setRecordDates] = useState([]);
    {/*const [clickCountRecord, setClickCountRecord] = useState(0);*/}

    useEffect(() => {
        fetch(`${URLs.api.main}/results-data`)
            .then(response => response.json())
            .then(data => {
                setData(data.titles);
            })
            .catch(error => {
                console.error('Error fetching result data:', error);
            });
    }, []);

    const handleResultsClick = () => {
        if (recordDates.length > 0) {
            setRecordDates([]); // Очищаем 
        }
    {/*    setClickCount(clickCount + 1);
    if (clickCount % 2 === 0) { */}
        const resultWithNameFlag1 = data.filter(item => item.flag === 1);
            setResultName(resultWithNameFlag1);
        {/* } else {
            setResultName([]);
        } */}
    };

    const handleRecordsClick = () => {
        if (resultName.length > 0) {
            setResultName([]); // Очищаем 
        }
    
        fetch(`${URLs.api.main}/records-data`)
            .then(response => response.json())
            .then(data => {
            {/*    setClickCountRecord(clickCountRecord + 1);
            if (clickCountRecord % 2 === 0) { */}
                setRecordDates(data.dates);
            {/* } else {
                setRecordDates([]);
            } */}
            })
            .catch(error => {
                console.error('Error fetching record data:', error);
            });
    };
    return (
        <>
            <StyledNav>
                <Button onClick={handleResultsClick}> 
                    <LinkContrast >РЕЗУЛЬТАТЫ</LinkContrast>
                </Button>
                <Button onClick={handleRecordsClick}> 
                    <LinkContrast >ЗАПИСИ</LinkContrast>
                </Button>
                <Button> 
                    <StyledLink to={URLs.ui.record}>ЗАПИСАТЬСЯ</StyledLink>
                </Button>
            </StyledNav>
            
            <EmptyBox>
                        {resultName.map((item, index) => (
                            <WhiteBox key={index}><TextWhiteBox>{item.name}</TextWhiteBox></WhiteBox>
                        ))}
            </EmptyBox>

            {recordDates.length > 0 && (
                <Container>
                    <CalendarContainer>
                        <Calendar/>
                    </CalendarContainer>
                    <PaleBoxContainer>
                    {recordDates.map((item, index) => (
                        <PaleBox key={index}>
                            <TextWhiteBox>Дата: {item.date.split('T')[0]}, Время: {item.date.split('T')[1]}</TextWhiteBox>
                        </PaleBox>
                    ))}
                    </PaleBoxContainer>
                </Container>
            )}
        </>
    )
}
