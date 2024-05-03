import React from 'react';
import './tb1styled';
import { H, Text1, Wrapper } from './tb1styled';

interface TextBlockProps {
    title: string;
    description: string;
}

export const TextBlock1: React.FC<TextBlockProps> = ({ title, description }) => (
    <Wrapper>
        <H>{title}</H>
        <Text1>{description}</Text1>
    </Wrapper>
);
