import { useState } from "react";
import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { Section } from "components/Section";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { MDXLocalRepository } from "../../api/MDXLocalRepository";
import { MDXComponents } from "utils/mdx-components";

const Article = ({
    articleData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [article] = useState(articleData);

    return (
        <>
            <Section>
                <p>{article?.date}</p>
                <h1>{article?.title}</h1>
                <p>{article?.category}</p>
            </Section>
            <MDXRemote
                components={MDXComponents}
                compiledSource={article.content}
                {...article}
            />

            <Button href="/" icon={<ArrowLeft size={16} />} iconPosition="left">
                Voltar para todos os artigos
            </Button>
        </>
    );
};

export default Article;

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params!;
    const repository = new MDXLocalRepository();
    const articleData = await repository.getArticle(slug as string);
    return { props: { articleData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const repository = new MDXLocalRepository();
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
