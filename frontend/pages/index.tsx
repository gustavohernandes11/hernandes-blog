import type { NextPage } from "next";
import { ArticleList } from "../src/components/ArticleList";
import { Article } from "components/Article";
import { Pagination } from "components/Pagination";
import { listArticles } from "services/articles";
import { useState } from "react";
import { Container, Heading, useColorMode } from "@chakra-ui/react";

type ElementArticleType = {
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
    const [pagination] = useState(pageData.pagination);
    const { colorMode } = useColorMode();

    return (
        <>
            <title>Hernandes | Blog de desenvolvimento web</title>
            <Container
                bgColor={colorMode === "dark" ? "custom.background" : "white"}
                color={colorMode === "dark" ? "custom.light" : "black"}
                display="flex"
                flexDirection="column"
                padding={{ base: "1rem 2rem", lg: "1.5rem 3rem" }}
                maxW="100vw"
            >
                <Heading mb="2rem" size="md">
                    Todos os artigos
                </Heading>
                <ArticleList>
                    {articles.map((e: ElementArticleType) => {
                        return (
                            <>
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
                            </>
                        );
                    })}
                </ArticleList>
                {pagination.total > 10 && (
                    <Pagination
                        count={pagination.pageCount}
                        page={pagination.page}
                        onChange={() => {}}
                    />
                )}
            </Container>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const pageData = await listArticles();

    if (!pageData) {
        return {
            notFound: true,
        };
    }
    return {
        props: { pageData },
    };
}
