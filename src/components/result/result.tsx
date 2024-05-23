import React, {useState, useEffect} from "react"
import { URLs } from "../../__data__/urls";
import {problem} from '../../assets';

import {Section, StyledRes, StyledText, StyledDesc, Tip, StyledTip, StyledLink} from './result.styled';

const tip = "Советуем обсудить результаты со специалистом";

export function Res() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        fetch('/api/tests-data')
            .then(response => response.json())
            .then(data => {
                setTitle(data.results[2].title);
                setDesc(data.results[2].description);
            })
            .catch(error => {
                console.error('Error fetching test data:', error);
            });
    }, []);

    return(
    <>
        <Section>
        <StyledRes>{title}</StyledRes>
        <StyledText>{desc}</StyledText>
            <StyledDesc>
                <Tip>
                    <StyledTip>{tip}</StyledTip>
                    <StyledLink to={URLs.ui.record}>Запись</StyledLink>
                </Tip>
                <img src={problem} alt="Иллюстрация проблемы" />
            </StyledDesc>
        </Section>
    </>
    );
}