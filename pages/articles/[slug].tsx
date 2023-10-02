import { ArrowLeft } from "@styled-icons/fa-solid";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "components/Button";
import { Section } from "components/Section";
import { readFileSync, readdirSync } from "fs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const Article = ({
    MdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [source] = useState(MdxSource);
    const components = {
        code({ node, inline, className, style, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    showLineNumbers
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
    return (
        <>
            <Section>
                <p>{source?.frontmatter?.date as string}</p>
                <h1>{source?.frontmatter?.title as string}</h1>
                <p>{source?.frontmatter?.category as string}</p>
            </Section>
            <MDXRemote components={components} {...source} />

            <Button href="/" icon={<ArrowLeft size={16} />} iconPosition="left">
                Voltar para todos os artigos
            </Button>
        </>
    );
};

export default Article;

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params!;
    const fileDir = path.join(process.cwd(), "_articles", slug + ".mdx");
    const articleFile = readFileSync(fileDir, "utf-8");
    const MdxSource = await serialize(articleFile, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            remarkRehypeOptions: { allowDangerousHtml: true },
        },
        parseFrontmatter: true,
    });
    return { props: { MdxSource } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dirPath = path.join(process.cwd(), "_articles");
    const filePaths = readdirSync(dirPath).filter(
        (filePath) => path.extname(filePath).toLowerCase() === ".mdx"
    );
    let paths = [];

    for (const filePath of filePaths) {
        paths.push({
            params: {
                slug: filePath.replace(".mdx", ""),
            },
        });
    }

    return {
        paths,
        fallback: true,
    };
};
