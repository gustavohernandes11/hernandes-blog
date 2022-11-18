// @ts-nocheck
import { Article } from "components/Article";
import { Header } from "components/_mobile/Header";
import { Image } from "components/Image";
import { Heading } from "components/Heading";
import { Container } from "components/Container";
import ReactMarkdown from "react-markdown";
import { Title } from "components/Title";
import { RecommendedArticles } from "components/RecommendedArticles";
import { IconButton } from "components/IconButton";
import { ArrowLeft } from "@styled-icons/feather";
import { useScreen } from "hooks/useScreen";
import { GoTopButton } from "components/GoTopButton";
import { useRouter } from "next/router";

import { listArticles, readArticle } from "services/articles";
import { PropsWithChildren, useEffect, useState } from "react";
import { MarkDownContent } from "components/MarkDownContent";
import { GetStaticProps } from "next";


const Post = ({ articleData }: any) => {
    const [article] = useState(articleData)

    useEffect(() => {
        // listArticles().then(e => console.log(e))
        // readArticle("bifidosque-formatus-est").then(e => console.log(e))
        // console.log(article)
    }, [article])

    const { isTablet, isDesktopOrLaptop } = useScreen()
    const router = useRouter()

    return (
        <>
            {isTablet && <Header />}
            <div className="post-wrapper-content">
                {isDesktopOrLaptop &&
                    <Container as="header">
                        <IconButton onClick={() => router.back()} className="go-back">
                            <ArrowLeft size={20} /> Voltar
                        </IconButton>
                    </Container>
                }
                <Image src={article.hero.url} width={article.hero.width} height={article.hero.height} cape={true} alt="imagem de capa do artigo" />
                <Container as="span" align="center"><p className="post-info-paragraph">3min de leitura - {article.category.name}</p></Container>

                <section>
                    <Title>{article.title}</Title>
                    <MarkDownContent>{article.content}</MarkDownContent>
                    <hr />
                    <Heading as="h1" size="medium" align="center">Recomendações</Heading>
                    <RecommendedArticles />
                    {!isTablet && (<Container align="end">
                        <GoTopButton />
                    </Container>)}
                </section>
            </div>
        </>
    );
};

export default Post;


export async function getStaticPaths() {
    const articles = await listArticles()

    const paths = articles.map(e => {
        return {
            params: { slug: e.attributes.slug },
        };
    });
    console.log(paths)
    return {
        paths,
        fallback: false,

    }

}


export async function getStaticProps({ params }) {
    const data = await readArticle({ postSlug: params.slug });

    let articleData: { author, excerpt, publishedAt, slug, tags, title, content, meta } = data.attributes
    const hero: { height, width, url, alternativeText } = data.attributes.hero?.data.attributes
    const category: { name, color, acronym } = data.attributes.category.data.attributes
    const author: { name, slug, bio } = data.attributes.author.data.attributes
    const metadata: { title, description, keywords } = data.attributes.meta

    articleData = { ...articleData, hero, category, author, metadata }



    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { articleData },
    };
}
