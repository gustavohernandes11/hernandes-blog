import { Title } from "components/Title";
import { readArticle } from "strapi-api/readArticle";
import { listArticles } from "strapi-api/listArticles";
import { useState } from "react";
import { MarkDownContent } from "components/MarkDownContent";
import { Meta } from "components/Meta";
import { listSuggestedArticles } from "strapi-api/listSuggestedArticles";
import { ArticleContent } from "components/ArticleContent";
import Image from "next/image";
import Link from "next/link";

const Post = ({ articleData, suggestedArticlesData }: any) => {
    const [article] = useState(articleData);

    return (
        <>
            <Meta
                description={article.metadata.description}
                keywords={article.metadata.keywords}
                title={article.metadata.title}
            />
            <p>{article.category.name}</p>
            <Title>{article.title}</Title>
            <ArticleContent>
                <Image
                    alt={article.hero.alt}
                    height={article.hero.height}
                    width={article.hero.width}
                    src={article.hero.url}
                />
                <MarkDownContent>{article.content}</MarkDownContent>
                <hr />
                <Link href={"/"}>
                    <p>Voltar para todos os artigos</p>
                </Link>
            </ArticleContent>
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
