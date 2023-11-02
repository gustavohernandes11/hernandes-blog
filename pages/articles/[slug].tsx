import { useState } from "react";
import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { Section } from "components/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXComponents } from "utils/mdx-components";
import { PayloadRepository } from "../../api/PayloadRepository";
import { IDbArticleRepository } from "../../api/protocols";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import Markdown from "react-markdown";
import Head from "next/head";

const Article = ({
    articleData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [article] = useState(articleData);

    return (
        <>
            <Head>
                <title>Hernandes | {article?.title}</title>
            </Head>
            <Section>
                <p>{article?.date}</p>
                <h1>{article?.title}</h1>
                <p>{article?.category}</p>
            </Section>
            <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                children={article?.content}
                components={MDXComponents}
            />

            <Button
                aria-label="Go back to home page"
                href="/"
                icon={<ArrowLeft size={16} />}
                iconPosition="left"
            >
                Voltar para todos os artigos
            </Button>
        </>
    );
};

export default Article;

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params!;
    const repository: IDbArticleRepository = new PayloadRepository();
    const articleData = await repository.getArticle(slug as string);
    return { props: { articleData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const repository = new PayloadRepository();
    const slugs = await repository.listArticlesSlug();

    let paths = [];

    for (const slug of slugs) {
        paths.push({
            params: {
                slug,
            },
        });
    }

    return {
        paths,
        fallback: false,
    };
};
