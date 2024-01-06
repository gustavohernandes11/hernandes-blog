import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArticleHeading } from "../components/ArticleHeading";
import { Flex } from "components/Flex";

export const MDXComponents = {
    img: (props: any) => (
        <Flex justify="center">
            <img {...props} />
        </Flex>
    ),
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
    code(props: any) {
        const { children, className, node, ...rest } = props;
        const match = /language-(\w+)/.exec(className || "");
        return match ? (
            <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, "")}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
            />
        ) : (
            <code {...rest} className={className}>
                {children}
            </code>
        );
    },
};
