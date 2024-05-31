import React, {useState, useEffect} from "react"
import { URLs } from "../../__data__/urls";
import {problem} from '../../assets';
import { useSearchParams } from "react-router-dom";

import {Section, StyledRes, StyledText, StyledDesc, Tip, StyledTip, StyledLink} from './result.styled';

const tip = "Советуем обсудить результаты со специалистом";

export function Res() {
    const [searchParams] = useSearchParams();
    const score = searchParams.get('score');
    const id = searchParams.get('id');
    console.log("score=", score);
    console.log("id=", id);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const resultCounted = (score) => {
        let res = 0;
        if (score < 24) {
            res = 1;
        }
        if (score < 10) {
            res = 2;
        }
        return res;
    };

    useEffect(() => {
        fetch(`${URLs.api.main}/tests-data`)
            .then(response => response.json())
            .then(data => {
                const res = resultCounted(score);
                setTitle(data.tests[id].results[res].title);
                setDesc(data.tests[id].results[res].description);
            })
            .catch(error => {
                console.error('Error fetching results data:', error);
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