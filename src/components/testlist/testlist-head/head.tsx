import React from "react"

import {StyledImg, StyledText} from "./head.styled";

import { header} from '../../../img';

export function Head() {
        return (
            <>
            <StyledImg>
                <img src={header} alt="Девушка разговаривает с психологом." width="60%" height="420px"/>
            </StyledImg>

            <StyledText>ТЕСТЫ ОНЛАЙН</StyledText>
            </>
        )
}