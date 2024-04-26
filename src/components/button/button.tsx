import React from 'react';

interface ButtonProps {
    text: string;
    href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href }) => (
    <button className="link-button">
        <a className="link-contrast-button" href={href}>{text}</a>
    </button>
);
