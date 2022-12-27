import request from "graphql-request";
import { QUERY_READ_ARTICLE } from "graphql/queries/readArticle";
import { ArticleData } from "./strapiApiTypes";

export const readArticle = async (slug: string): Promise<ArticleData> => {
    const data = await request(
        `${process.env.NEXT_PUBLIC_CMS_URL_GRAPHQL}`,
        QUERY_READ_ARTICLE,
        {
            postSlug: slug,
        }
    ).then((r) => r.articles.data[0]);

    let articleData: {
        excerpt: string;
        publishedAt: string;
        slug: string;
        tags: object;
        title: string;
        content: object;
        meta: string;
    } = data.attributes;
    const hero: {
        url: string;
        height: number;
        width: number;
        alternativeText: string;
    } = data.attributes?.hero?.data.attributes;
    const category: { name: string; color: string; acronym: string } =
        data.attributes?.category.data.attributes;
    const author: { name: string; slug: string; bio: string } =
        data.attributes?.author.data.attributes;
    const metadata: { title: string; description: string; keywords: string } =
        data.attributes?.meta;

    const formattedData = Intl.DateTimeFormat("pt-BR", {
        dateStyle: "medium",
    }).format(new Date(articleData.publishedAt));

    articleData = {
        ...articleData,
        // @ts-ignore
        hero,
        category,
        author,
        metadata,
        publishedAt: formattedData,
    };

    // @ts-ignore
    return articleData;
};
