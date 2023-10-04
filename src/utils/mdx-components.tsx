import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArticleHeading } from "../components/ArticleHeading";

export const MDXComponents = {
    h1: ({ children, ...props }: any) => (
        <ArticleHeading as="h1" {...props}>
            {children}
        </ArticleHeading>
    ),
    h2: ({ children, ...props }: any) => (
        <ArticleHeading as="h2" {...props}>
            {children}
        </ArticleHeading>
    ),
    h3: ({ children, ...props }: any) => (
        <ArticleHeading as="h3" {...props}>
            {children}
        </ArticleHeading>
    ),
    h4: ({ children, ...props }: any) => (
        <ArticleHeading as="h4" {...props}>
            {children}
        </ArticleHeading>
    ),
    h5: ({ children, ...props }: any) => (
        <ArticleHeading as="h5" {...props}>
            {children}
        </ArticleHeading>
    ),
    h6: ({ children, ...props }: any) => (
        <ArticleHeading as="h6" {...props}>
            {children}
        </ArticleHeading>
    ),
    code({ node, inline, className, style, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                showLineNumbers
                lineNumberStyle={{ minWidth: 0 }}
                style={atomDark}
                language={match[1]}
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
};
