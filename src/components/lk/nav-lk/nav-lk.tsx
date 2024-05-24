import React from "react"
import { URLs } from "../../../__data__/urls";

import {StyledNav, Button, LinkContrast, StyledLink} from './nav-lk.styled';

export function Nav() {
    return (
        <>
            <StyledNav>
                
                <Button> 
                    <LinkContrast >РЕЗУЛЬТАТЫ</LinkContrast>
                </Button>
                <Button> 
                    <LinkContrast >ЗАПИСИ</LinkContrast>
                </Button>
                <Button> 
                    <StyledLink to={URLs.ui.record}>ЗАПИСАТЬСЯ</StyledLink>
                </Button>
                
            </StyledNav>
        </>
    )
}
