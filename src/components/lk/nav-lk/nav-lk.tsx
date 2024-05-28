import React from "react"
import { URLs } from "../../../__data__/urls";
import { useEffect } from "react";
import {useState} from "react";
import {StyledNav, Button, LinkContrast, StyledLink, WhiteBox, TextWhiteBox,EmptyBox} from './nav-lk.styled';

export function Nav() {
    const [data, setData] = useState([]);
    const [resultName, setResultName] = useState([]);
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
        const resultWithNameFlag1 = data.filter(item => item.flag === 1);
            setResultName(resultWithNameFlag1);
    };
    return (
        <>
            <StyledNav>
                
                <Button onClick={handleResultsClick}> 
                    <LinkContrast >РЕЗУЛЬТАТЫ</LinkContrast>
                    
                </Button>
                <Button> 
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
        </>
    )
}
