import React from 'react';
import './text-block.styled';
import { H, Text1, Wrapper } from './text-block.styled';

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
