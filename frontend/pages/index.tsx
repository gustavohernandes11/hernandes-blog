import type { NextPage } from "next";
import { ArticleList } from "../src/components/ArticleList";
import { Article } from "components/Article";
import { listArticles } from "strapi-api/listArticles";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Meta } from "components/Meta";

export type ElementArticleType = {
    category: any;
    hero: any;
    slug: string;
    acronym: string;
    title: string;
    color: string;
    publishedAt: string | number;
    excerpt: string;
};
const Home: NextPage = ({ pageData }: any) => {
    const [articles] = useState(pageData.articleList);

    return (
        <>
            <Meta
                description="Blog de desenvolvimento e outras coisas mais."
                key="default"
                keywords="tecnologia, engenharia, web, javascript, html, css"
                title="undefined | Home"
            />

            <Text mb="1rem">Artigos</Text>
            <ArticleList>
                {articles.map((e: ElementArticleType) => {
                    return (
                        <Article
                            imageSrc={e.hero.url}
                            imageHeight={e.hero.height}
                            imageWidth={e.hero.width}
                            imageAlt={e.hero.alternativeText}
                            slug={e.slug}
                            category={e.category.name}
                            title={e.title}
                            color={e.category.color}
                            date={e.publishedAt}
                            excerpt={e.excerpt}
                            key={`${e.slug}`}
                        />
                    );
                })}
            </ArticleList>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const pageData = await listArticles().catch(() => {
        throw new Error("The backend server is probably down");
    });

    if (!pageData) {
        return {
            notFound: true,
        };
    }
    return {
        props: { pageData },
    };
}
