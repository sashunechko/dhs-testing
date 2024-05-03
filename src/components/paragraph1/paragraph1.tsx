import React from 'react';
import './par1-styled';
import { Text2 } from './par1-styled';

interface ParagraphProps {
    text: string;
}

export const Par1: React.FC<ParagraphProps> = ({ text }) => (
    <Text2>{text}</Text2>
);
