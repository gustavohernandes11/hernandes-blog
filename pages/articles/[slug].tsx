import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { Section } from "components/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import { PayloadRepository } from "../../api/payloadCMS/PayloadRepository";
import { IDbArticleRepository } from "../../src/types/IDbArticleRepository";

import { RenderContent } from "components/RenderContent";
import Head from "next/head";

const Article = ({
    articleData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [article] = useState(articleData);

    return (
        <>
            <Head>
                <title>
                    Hernandes | {article?.meta?.title || article?.title}
                </title>
                <meta name="description" content={article?.meta?.description} />
                <meta name="keywords" content={article?.meta?.keywords} />
            </Head>
            <Section>
                <p>{article?.date}</p>
                <h1>{article?.title}</h1>
                <p>{article?.category}</p>
            </Section>

            <RenderContent content={article.content} />

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
