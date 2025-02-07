import React from 'react';

import './buttonStyled';
import { LinkButton, LinkContrastButton } from './buttonStyled';

interface ButtonProps {
    text: string;
    href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href }) => (
    <LinkButton>
        <LinkContrastButton to={href}>{text}</LinkContrastButton>
    </LinkButton>
);
