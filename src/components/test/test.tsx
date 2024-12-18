import React, {useState, useEffect} from "react"
import { URLs } from "../../__data__/urls";
import { useSearchParams } from "react-router-dom";
import {Page, Results, StyledLink, Card, Question, Number, Options, Opt} from './test.styled';
import { mainApi } from "../../__data__/service/main-api";

export function Questions() {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const testData = mainApi.useGetTestDataQuery().data
    const optionsFromTestData = testData?.options
    const questionsFromTestData = testData?.tests[id].questions

    useEffect(() => {
      setOptions(optionsFromTestData)
      setQuestions(questionsFromTestData)
    }, [optionsFromTestData, questionsFromTestData])

    const optionClicked = (count) => {
        setScore(score + count);
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
    };

    return(
    <>
        <Page>
      {showResults ? (
        <Results>
          <h1>Результат</h1>
          <h2>
            {score} / {questions.length * 4}
          </h2>
          <StyledLink to={`${URLs.ui.result}?id=${id}&score=${score}`}>Подробнее</StyledLink>
        </Results> ) : (
            <Card>
              <Question>
                {questions[currentQuestion]}
              </Question>
              <Number>Вопрос {currentQuestion + 1} / {questions.length}</Number>

              <Options>
                {options?.map((option) => {
                  return (
                    <Opt
                      key={option.count}
                      onClick={() => optionClicked(option.count)}
                    >
                      {option.text}
                    </Opt>
                  );
                })}
              </Options>

            </Card>
          )
          
      }
      </Page>
    </>
    );
}