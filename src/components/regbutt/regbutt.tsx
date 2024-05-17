import React from 'react';
import './regbutton-styled';
import { LinkButton1, LinkContrastButton } from './regbutton-styled';

interface RegistrationButtonProps {
    text: string;
    href: string;
}

export const RegButton: React.FC<RegistrationButtonProps> = ({ text, href }) => (
    <LinkButton1>
        <LinkContrastButton to={href}>{text}</LinkContrastButton>
    </LinkButton1>
);
