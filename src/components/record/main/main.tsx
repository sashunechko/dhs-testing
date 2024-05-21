import React from 'react';

import {MainContent, Bio, Bg} from './main.styled';

import {InfoForm} from "../info";
import { record} from '../../../assets';

export const Main = () => {
    return (
        <MainContent>
            <Bio>
                <Bg>
                    <InfoForm/>
                </Bg>
                <img src={record} alt="Улыбающаяся девушка на фоне листьев" width="50%" />
            </Bio>
        </MainContent>
    );
}