import React from 'react';
import './par-two.styled';
import { Text } from './par-two.styled';

interface ParagraphProps {
    text: string;
}

export const ParTwo: React.FC<ParagraphProps> = ({ text }) => (
    <Text>{text}</Text>
);
