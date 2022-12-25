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
        my: "1rem",
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
                        <Text
                            fontSize={config.fontSize}
                            my={config.my}
                            {...props}
                        >
                            {children}
                        </Text>
                    );
                },
                pre: CodeContainer,
                h1({ children }) {
                    return (
                        <Heading my={config.my} mt="3rem" as="h1" size="2xl">
                            {children}
                        </Heading>
                    );
                },
                h2({ children }) {
                    return (
                        <Heading my={config.my} mt="2.5rem" as="h2" size="xl">
                            {children}
                        </Heading>
                    );
                },
                h3({ children }) {
                    return (
                        <Heading my={config.my} mt="2rem" as="h3" size="lg">
                            {children}
                        </Heading>
                    );
                },
                h4({ children }) {
                    return (
                        <Heading my={config.my} as="h4" size="md">
                            {children}
                        </Heading>
                    );
                },
                h5({ children }) {
                    return (
                        <Heading my={config.my} as="h5" size="sm">
                            {children}
                        </Heading>
                    );
                },
                h6({ children }) {
                    return (
                        <Heading my={config.my} as="h6" size="xl">
                            {children}
                        </Heading>
                    );
                },

                ul({ children, ...props }) {
                    return (
                        <UnorderedList my={config.my} pl={"2rem"} {...props}>
                            {children}
                        </UnorderedList>
                    );
                },
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
                            customStyle={{
                                fontSize: config.fontSize,
                                marginInline: 0,
                            }}
                            children={String(children).replace(/\n$/, "")}
                            style={atomDark}
                            language={match[1]}
                            {...props}
                        />
                    ) : (
                        <Code
                            m={0}
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
