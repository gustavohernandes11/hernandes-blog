import { Image } from "components/Image";
import { Title } from "components/Title";
import { RecommendedArticles } from "components/RecommendedArticles";
import { GoTopButton } from "components/GoTopButton";
import { listArticles, readArticle } from "services/articles";
import { useState } from "react";
import { MarkDownContent } from "components/MarkDownContent";
import { Meta } from "components/Meta";
import { Container, Flex, useColorMode } from "@chakra-ui/react";

const Post = ({ articleData }: any) => {
    const [article] = useState(articleData);
    const { colorMode } = useColorMode();

    return (
        <>
            <Meta
                description={article.metadata.description}
                keywords={article.metadata.keywords}
                title={article.metadata.description}
            />
            <Flex
                flexDirection="column"
                bgColor={colorMode === "dark" ? "custom.background" : "white"}
                color={colorMode === "dark" ? "custom.light" : "black"}
            >
                <Image
                    src={article.hero.url}
                    width={article.hero.width}
                    height={article.hero.height}
                    cape={true}
                    alt="imagem de capa do artigo"
                />
                <Flex as="span" flexDirection="row" mx="auto" my="1rem">
                    <time>{article.publishedAt}</time>
                    <p style={{ marginInline: "1rem" }}>•</p>
                    <b>{article.category.name}</b>
                </Flex>

                <Flex mx="2rem" mb="2rem" flexDirection="column" as="section">
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
                    <RecommendedArticles
                        items={article.recommendedArticles.articleList}
                    />

                    <GoTopButton />
                </Flex>
            </Flex>
        </>
    );
};

export default Post;

export async function getStaticPaths() {
    const response = await listArticles();

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
    try {
        const articleData = await readArticle(params.slug);

        if (!articleData) {
            return {
                notFound: true,
            };
        }
        return {
            props: { articleData },
        };
    } catch {
        return {
            notFound: true,
        };
    }
}
