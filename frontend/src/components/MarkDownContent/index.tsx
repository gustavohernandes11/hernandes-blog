import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Heading } from "../Heading";
import ReactMarkdown from "react-markdown";
import { CodeContainer } from 'components/CodeContainer';

export const MarkDownContent = ({ children }: any): JSX.Element => {

    return (
        <ReactMarkdown
            components={{
                h1: Heading,
                pre: CodeContainer,
                code({ node, inline, className, style, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={atomDark}
                            language={match[1]}
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        >
            {children}
        </ReactMarkdown>
    );
};
