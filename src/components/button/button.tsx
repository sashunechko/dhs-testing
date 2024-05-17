import React from 'react';

import './button-styled';
import { LinkButton, LinkContrastButton } from './button-styled';

interface ButtonProps {
    text: string;
    href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href }) => (
    <LinkButton>
        <LinkContrastButton to={href}>{text}</LinkContrastButton>
    </LinkButton>
);
