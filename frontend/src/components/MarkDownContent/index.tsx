
import Image from "next/image";
import { Heading } from "../Heading";
import { ImageWrapper } from "../ImageWrapper";
import { CodeContainer } from "../CodeContainer";
import { BlockQuote } from "../BlockQuote";
import ReactMarkdown from "react-markdown";

export const MarkDownContent = ({ children }: any): JSX.Element => {

    return (
        <ReactMarkdown
            components={{
                h1: Heading,
                pre: CodeContainer,
                image: ImageWrapper,
                blockquote: BlockQuote,
            }}
        >
            {children}
        </ReactMarkdown>
    );
};
