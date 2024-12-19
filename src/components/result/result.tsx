import React, {useState, useEffect} from "react";
import Lottie from 'react-lottie';
import { URLs } from "../../__data__/urls";
import { useSearchParams } from "react-router-dom";
import * as animData1 from '../../../src/assets/sad-face.json';
import * as animData2 from '../../../src/assets/calm.json';
import * as animData3 from '../../../src/assets/happy.json';
import { mainApi } from "../../__data__/service/main-api";

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

    const data = [animData1, animData2, animData3];

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: data[resultCounted(score)],
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const testData = mainApi.useGetTestDataQuery().data
    const res = resultCounted(score);
    const titleFromTestData = testData?.tests[id]?.results[res]?.title
    const descriptionFromTestData = testData?.tests[id]?.results[res]?.description
    
    useEffect(() => {
        setTitle(titleFromTestData)
        setDesc(descriptionFromTestData)
    }, [titleFromTestData, descriptionFromTestData])

    // useEffect(() => {
    //     fetch(`${URLs.api.main}/tests-data`)
    //         .then(response => response.json())
    //         .then(data => {
    //             const res = resultCounted(score);
    //             setTitle(data.tests[id].results[res].title);
    //             setDesc(data.tests[id].results[res].description);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching results data:', error);
    //         });
    // }, []);

    return(
    <>
        <StyledRes>{title}</StyledRes>
        <Section>
        <StyledText>{desc}</StyledText>
            <StyledDesc>
                <Lottie options={defaultOptions}
                    height={500}
                    width={500}/>
                <Tip>
                    <StyledTip>{tip}</StyledTip>
                    <StyledLink to={URLs.ui.record}>Запись</StyledLink>
                </Tip>
            </StyledDesc>
        </Section>
    </>
    );
}