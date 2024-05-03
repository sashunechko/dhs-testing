import React from 'react';

import './button-styled';
import { LinkButton, LinkContrastButton } from './button-styled';

interface ButtonProps {
    text: string;
    href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href }) => (
    <LinkButton>
        <LinkContrastButton href={href}>{text}</LinkContrastButton>
    </LinkButton>
);
