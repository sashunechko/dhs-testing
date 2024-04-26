import React from 'react';

interface TextBlockProps {
    title: string;
    description: string;
}

export const TextBlock1: React.FC<TextBlockProps> = ({ title, description }) => (
    <div className="wrapper">
        <h1 className="h1">{title}</h1>
        <p className="text1">{description}</p>
    </div>
);
