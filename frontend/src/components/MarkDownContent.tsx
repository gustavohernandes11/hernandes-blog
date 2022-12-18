import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {
    Heading,
    ListItem,
    UnorderedList,
    Code,
    Link,
    Text,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { CodeContainer } from "components/CodeContainer";

export const MarkDownContent = ({ children }: any): JSX.Element => {
    const config = {
        fontSize: 16,
    };
    return (
        <ReactMarkdown
            components={{
                a({ children, ...props }) {
                    return (
                        <Link color="purple.400" isExternal={true} {...props}>
                            {children}
                        </Link>
                    );
                },
                p({ children, ...props }) {
                    return (
                        <Text fontSize={config.fontSize} {...props}>
                            {children}
                        </Text>
                    );
                },
                pre: CodeContainer,
                h1({ children }) {
                    return (
                        <Heading my="1rem" as="h1">
                            {children}
                        </Heading>
                    );
                },
                h2({ children }) {
                    return (
                        <Heading my="1rem" as="h2">
                            {children}
                        </Heading>
                    );
                },
                h3({ children }) {
                    return (
                        <Heading my="1rem" as="h3">
                            {children}
                        </Heading>
                    );
                },
                h4({ children }) {
                    return (
                        <Heading my="1rem" as="h4">
                            {children}
                        </Heading>
                    );
                },
                h5({ children }) {
                    return (
                        <Heading my="1rem" as="h5">
                            {children}
                        </Heading>
                    );
                },
                h6({ children }) {
                    return (
                        <Heading my="1rem" as="h6">
                            {children}
                        </Heading>
                    );
                },
                ul: UnorderedList,
                li({ children, ...props }) {
                    return (
                        <ListItem {...props} fontSize={config.fontSize}>
                            {children}
                        </ListItem>
                    );
                },
                code({ node, inline, className, style, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                            customStyle={{ fontSize: "1.1rem" }}
                            children={String(children).replace(/\n$/, "")}
                            style={atomDark}
                            language={match[1]}
                            {...props}
                        />
                    ) : (
                        <Code
                            className={className}
                            fontSize={config.fontSize}
                            {...props}
                        >
                            {children}
                        </Code>
                    );
                },
            }}
        >
            {children}
        </ReactMarkdown>
    );
};
