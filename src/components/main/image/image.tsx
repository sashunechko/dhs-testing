import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
}

export const Image1: React.FC<ImageProps> = ({ src, alt }) => (
    <img src={src} alt={alt} />
);
