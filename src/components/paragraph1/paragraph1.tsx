import React from 'react';

interface ParagraphProps {
    text: string;
}

export const Par1: React.FC<ParagraphProps> = ({ text }) => (
    <p className="text2">{text}</p>
);
