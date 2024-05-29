import React from "react"
import { URLs } from "../../../__data__/urls";
import { useEffect } from "react";
import {useState} from "react";
import {StyledNav, Button, LinkContrast, StyledLink, WhiteBox, TextWhiteBox, EmptyBox, PaleBox} from './nav-lk.styled';

export function Nav() {
    const [data, setData] = useState([]);
    const [resultName, setResultName] = useState([]);
    const [clickCount, setClickCount] = useState(0);

    const [recordDates, setRecordDates] = useState([]);
    const [clickCountRecord, setClickCountRecord] = useState(0);

    useEffect(() => {
        fetch('/api/results-data')
            .then(response => response.json())
            .then(data => {
                setData(data.titles);
            })
            .catch(error => {
                console.error('Error fetching result data:', error);
            });
    }, []);

    const handleResultsClick = () => {
        setClickCount(clickCount + 1);
    if (clickCount % 2 === 0) {
        const resultWithNameFlag1 = data.filter(item => item.flag === 1);
            setResultName(resultWithNameFlag1);
        } else {
            setResultName([]);
        }
    };

    const handleRecordsClick = () => {
        fetch('/api/records-data')
            .then(response => response.json())
            .then(data => {
                setClickCountRecord(clickCountRecord + 1);
    if (clickCountRecord % 2 === 0) {
                setRecordDates(data.dates);
            } else {
                setRecordDates([]);
            }
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
                <EmptyBox>
                    {recordDates.map((item, index) => (
                        <PaleBox key={index}>
                            <TextWhiteBox>{item.date}</TextWhiteBox>
                        </PaleBox>
                    ))}
                </EmptyBox>
            )}
        </>
    )
}
