import React, {useState, useEffect} from "react"
import { URLs } from "../../__data__/urls";
import { useSearchParams } from "react-router-dom";
import {Page, Results, StyledLink, Card, Question, Number, Options, Opt} from './test.styled';

export function Questions() {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    useEffect(() => {
      fetch(`${URLs.api.main}/tests-data`)
          .then(response => response.json())
          .then(data => {
              setOptions(data.options);
              setQuestions(data.tests[id].questions);
          })
          .catch(error => {
              console.error('Error fetching test data:', error);
          });
    }, []);

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
                {options.map((option) => {
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