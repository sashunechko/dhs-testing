import React from "react";
import './par2-styled';
import { Text3 } from "./par2-styled";
interface DescriptionParagraphProps {
    text: string;
}

export const Par2: React.FC<DescriptionParagraphProps> = ({ text }) => (
    <Text3>{text}</Text3>
);
