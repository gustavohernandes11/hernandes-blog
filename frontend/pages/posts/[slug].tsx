import { Image } from "components/Image";
import { Title } from "components/Title";
import { GoTopButton } from "components/GoTopButton";
import { readArticle } from "strapi-api/readArticle";
import { listArticles } from "strapi-api/listArticles";
import { useState } from "react";
import { MarkDownContent } from "components/MarkDownContent";
import { Meta } from "components/Meta";
import { ArticleAuthor } from "components/ArticleAuthor";
import { listSuggestedArticles } from "strapi-api/listSuggestedArticles";
import { ArticleContent } from "components/ArticleContent";

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
            <Title>{article.title}</Title>
            <ArticleContent>
                <MarkDownContent>{article.content}</MarkDownContent>
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
