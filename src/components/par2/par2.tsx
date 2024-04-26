import React from "react";

interface DescriptionParagraphProps {
    text: string;
}

export const Par2: React.FC<DescriptionParagraphProps> = ({ text }) => (
    <p className="text3">{text}</p>
);
