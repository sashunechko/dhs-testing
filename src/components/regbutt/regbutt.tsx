import React from 'react';

interface RegistrationButtonProps {
    text: string;
    href: string;
}

export const RegButton: React.FC<RegistrationButtonProps> = ({ text, href }) => (
    <button className="link-button1">
        <a className="link-contrast-button" href={href}>{text}</a>
    </button>
);
