import { Footer } from "components/Footer";
import { Header } from "components/_mobile/Header";
import { Image } from "components/Image";
import { Heading } from "components/Heading";
import { Container } from "components/Container";
import { Title } from "components/Title";
import { RecommendedArticles } from "components/RecommendedArticles";
import { IconButton } from "components/IconButton";
import { ArrowLeft } from "@styled-icons/feather";
import { useScreen } from "hooks/useScreen";
import { GoTopButton } from "components/GoTopButton";
import { useRouter } from "next/router";

import { listArticles, readArticle } from "services/articles";
import { useState } from "react";
import { MarkDownContent } from "components/MarkDownContent";
import { Meta } from "components/Meta";


const Post = ({ articleData }: any) => {
    const [article] = useState(articleData)

    const { isTablet } = useScreen()
    const router = useRouter()

    return (
        <>
            <Meta
                description={article.metadata.description}
                keywords={article.metadata.keywords}
                title={article.metadata.description}
            />

            {isTablet && <Header />}
            <div className="post-wrapper-content">
                {!isTablet &&
                    <Container as="header" align="center" justify="start" m="1rem 0">
                        <IconButton onClick={() => router.back()} className="go-back">
                            <ArrowLeft size={20} /> Voltar
                        </IconButton>
                    </Container>
                }
                <Image src={article.hero.url} width={article.hero.width} height={article.hero.height} cape={true} alt="imagem de capa do artigo" />
                <Container as="span" align="center" justify="center"><time>{article.publishedAt}</time><p style={{ marginInline: "1rem" }}>•</p><b>{article.category.name}</b></Container>

                <section>
                    <Title>{article.title}</Title>
                    <MarkDownContent>{article.content}</MarkDownContent>
                    <hr />
                    <Heading as="h1" size="medium" align="center">Recomendações</Heading>
                    <RecommendedArticles items={article.recommendedArticles.articleList} />
                    {!isTablet && (<Container align="center" justify="end" m="1rem 0">
                        <GoTopButton />
                    </Container>)}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Post;


export async function getStaticPaths() {
    const response = await listArticles()

    const paths = response.articleList.map((e: { slug: any; }) => {
        return {
            params: { slug: e.slug },
        };
    });

    return {
        paths,
        fallback: false,
    }


}

type getStaticPropsType = {
    params: {
        slug: string
    }
}
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
