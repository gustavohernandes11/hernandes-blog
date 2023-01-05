import { Image } from "components/Image";
import { Title } from "components/Title";
import { RecommendedArticles } from "components/RecommendedArticles";
import { GoTopButton } from "components/GoTopButton";
import { readArticle } from "strapi-api/readArticle";
import { listArticles } from "strapi-api/listArticles";
import { useState } from "react";
import { MarkDownContent } from "components/MarkDownContent";
import { Meta } from "components/Meta";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { ArticleAuthor } from "components/ArticleAuthor";
import { listSuggestedArticles } from "strapi-api/listSuggestedArticles";

const Post = ({ articleData, suggestedArticlesData }: any) => {
    const [article] = useState(articleData);
    const [suggestedArticles] = useState(suggestedArticlesData);

    return (
        <>
            <Meta
                description={article.metadata.description}
                keywords={article.metadata.keywords}
                title={article.metadata.title}
            />
            <Flex
                flexDirection="column"
                bgColor="background"
                color="textColor"
                overflowY="auto"
                mb={["1rem", null, "2rem"]}
            >
                <Container
                    w="100%"
                    maxW="100wv"
                    maxH="80vh"
                    overflow="hidden"
                    p={0}
                >
                    <Image
                        src={article.hero.url}
                        width={article.hero.width}
                        height={article.hero.height}
                        alt="imagem de capa do artigo"
                        quality={75}
                    />
                </Container>
                <Flex as="span" flexDirection="row" mx="auto" my="1rem">
                    <time>{article.publishedAt}</time>
                    <p style={{ marginInline: "1rem" }}>•</p>
                    <b>{article.category.name}</b>
                </Flex>

                <Flex
                    mb="2rem"
                    flexDirection="column"
                    as="section"
                    px={["1rem", "2rem", null]}
                >
                    <Container
                        size="lg"
                        as="article"
                        maxW="50rem"
                        w="100%"
                        p="0"
                        flexDirection="column"
                    >
                        <Title>{article.title}</Title>
                        <MarkDownContent>{article.content}</MarkDownContent>
                    </Container>
                </Flex>
                <ArticleAuthor />
                <Container
                    maxW="100vw"
                    w="100%"
                    px={["1.75rem", "2.5rem", null]}
                >
                    <Heading
                        as="h2"
                        size="md"
                        my={["1rem", null, null, "2rem"]}
                        textAlign="center"
                    >
                        Continue lendo
                    </Heading>

                    <RecommendedArticles
                        nextArticle={suggestedArticles.next_article}
                        prevArticle={suggestedArticles.prev_article}
                    />
                </Container>

                <GoTopButton />
            </Flex>
        </>
    );
};

export default Post;

export async function getStaticPaths() {
    const response = await listArticles();
    console.log(response);
    const paths = response.articleList.map((e: { slug: any }) => {
        return {
            params: { slug: e.slug },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

type getStaticPropsType = {
    params: {
        slug: string;
    };
};
export async function getStaticProps({ params }: getStaticPropsType) {
    const articleData = await readArticle(params.slug);
    const suggestedArticlesData = await listSuggestedArticles(articleData.id);

    if (!articleData) {
        return {
            notFound: true,
        };
    }
    return {
        props: { articleData, suggestedArticlesData },
    };
}
