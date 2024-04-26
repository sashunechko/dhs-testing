import React from 'react';

interface TitleProps {
    text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => (
    <h1 className="h">{text}</h1>
);
