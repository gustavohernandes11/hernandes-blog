import type { NextPage } from "next";
import { ArticleList } from "../src/components/ArticleList";
import { Article } from "components/Article";
import { Pagination } from "components/Pagination";
import { useScreen } from "hooks/useScreen";
import { listArticles } from "services/articles";
import { useState } from "react";
import { Footer } from "components/Footer";
import { Container, SimpleGrid } from "@chakra-ui/react";

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

    const { isTablet } = useScreen();
    return (
        <>
            <title>Hernandes | Blog de desenvolvimento web</title>
            <Container
                bgColor="custom.background"
                display="flex"
                flexDirection="column"
                padding={{ base: "2rem", lg: "3rem" }}
                minHeight="-moz-max-content"
                maxW="100vw"
                h="100%"
            >
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
                                    key={e.slug}
                                />
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
                                    key={e.slug}
                                />
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
                                    key={e.slug}
                                />
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
                                    key={e.slug}
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
