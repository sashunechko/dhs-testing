import React from 'react';
import './reg-button.styled';
import { LinkButton1, LinkContrastButton } from './reg-button.styled';

interface RegistrationButtonProps {
    text: string;
    href: string;
}

export const RegButton: React.FC<RegistrationButtonProps> = ({ text, href }) => (
    <LinkButton1>
        <LinkContrastButton to={href}>{text}</LinkContrastButton>
    </LinkButton1>
);
