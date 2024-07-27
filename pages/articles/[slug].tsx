import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { goTop } from "components/GoTopButton";
import { Paragraph } from "components/Paragraph";
import { RenderContent } from "components/RenderContent";
import { Section } from "components/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { PayloadCMSRepository } from "../../api/PayloadCMSRepository";
import { IDbArticleRepository } from "../../src/types/IDbArticleRepository";

const Article = ({
    articleData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [article] = useState(articleData);

    useEffect(() => {
        goTop();
    }, []);

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
                <Paragraph secondary>{article?.date}</Paragraph>
                <h1>{article?.title}</h1>
                <Paragraph secondary>{article?.category}</Paragraph>
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
    const repository: IDbArticleRepository = new PayloadCMSRepository();
    const articleData = await repository.getArticle(slug as string);
    return { props: { articleData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const repository = new PayloadCMSRepository();
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
