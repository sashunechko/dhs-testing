import React from "react";
import './par-one.styled';
import { Text } from "./par-one.styled";
interface DescriptionParagraphProps {
    text: string;
}

export const Par: React.FC<DescriptionParagraphProps> = ({ text }) => (
    <Text>{text}</Text>
);
