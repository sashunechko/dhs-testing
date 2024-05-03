import React from "react"

import { StyledBg, StyledForm, StyledButton, StyledHeader, StyledInfo, StyledInput} from "./form.styled";

export function Form(props) {
    return (
        <>
        <StyledForm>
              <StyledBg>
                  <StyledHeader>{props.first}</StyledHeader>
                  <StyledInfo>
                      <StyledInput type="email" placeholder="Email" name="email" required/>
                      <StyledInput type="password" placeholder="Пароль" name="password" required/>
                      <StyledButton type="submit" form="id-info">{props.second}</StyledButton>
                  </StyledInfo>
                  <a href="">{props.third}</a>
              </StyledBg>
        </StyledForm>
        </>
    )
}
