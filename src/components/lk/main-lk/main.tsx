import React from "react"

import {Profile} from "../../lk/profile";

import { person} from '../../../assets';

import {MainContent, Wrapper, Bio, Button} from './main.styled';

export function Main() {
    return (
        <>
            <MainContent>
                <Wrapper>
                    <Bio>
                        <Profile imgSrc={person} />
                    </Bio>
                    <Button type="submit" form="id-info" >
                        <input type="file" id="imageInput" accept="image/*" />
                    </Button>
                </Wrapper>
            </MainContent>
        </>
    )
}
