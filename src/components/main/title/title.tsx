import React from 'react';
import './title-styled';
import { Hh } from './title-styled';

interface TitleProps {
    text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => (
    <Hh>{text}</Hh>
);
