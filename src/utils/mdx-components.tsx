import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const MDXComponents = {
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
