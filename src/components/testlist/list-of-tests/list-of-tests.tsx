import React, {useState, useEffect} from "react";

import {Table, StyledRectangle, StyledLink} from "./list-of-tests.styled";
import { URLs } from "../../../__data__/urls";

export function List() {

    const [data, setData] = useState([]);

    const listTests = data.map(test => 
        <StyledRectangle key={test.id}>
        <StyledLink to={URLs.ui.q}>{test.name} ( {test.executionTime} мин. ) </StyledLink>
        </StyledRectangle>
    );

    useEffect(() => {
      fetch('/api/tests-data')
          .then(response => response.json())
          .then(data => {
              setData(data.titles);
          })
          .catch(error => {
              console.error('Error fetching test data:', error);
          });
    }, []);

        return (
            <>
                <Table>
                    {listTests}         
                </Table>
            </>
        )
}