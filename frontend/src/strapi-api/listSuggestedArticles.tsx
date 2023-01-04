import request from "graphql-request";
import { QUERY_LIST_SUGGESTED_ARTICLES } from "graphql/queries/listSuggestedArticles";
import { dateFormatter } from "utils/dataFormatter";

export const listSuggestedArticles = async (
    actualArticleID: number
): Promise<SuggestedArticles> => {
    const data = await request(
        `${process.env.NEXT_PUBLIC_CMS_URL_GRAPHQL}`,
        QUERY_LIST_SUGGESTED_ARTICLES,
        {
            actualArticleID: actualArticleID,
        }
    );
    let next_article: {
        title: string;
        excerpt: string;
        slug: string;
        publishedAt: string;
    } = data?.next_article.data[0]?.attributes;
    const next_articleID = data?.next_article?.data[0]?.id || null;

    const next_articleCategory: {
        acronym: string;
        name: string;
        color: string;
    } =
        data?.next_article?.data[0]?.attributes?.category?.data?.attributes ||
        null;

    if (next_article) {
        next_article.publishedAt = dateFormatter(next_article.publishedAt);
    }

    let prev_article: {
        title: string;
        excerpt: string;
        slug: string;
        publishedAt: string;
    } = data?.prev_article?.data[0]?.attributes;
    const prev_articleID = data?.prev_article?.data[0]?.id || null;

    const prev_articleCategory: {
        acronym: string;
        name: string;
        color: string;
    } =
        data?.prev_article?.data[0]?.attributes?.category?.data?.attributes ||
        null;

    if (prev_article) {
        prev_article.publishedAt = dateFormatter(prev_article?.publishedAt);
    }

    return {
        next_article: {
            ...next_article,
            category: next_articleCategory,
            id: next_articleID,
        },
        prev_article: {
            ...prev_article,
            category: prev_articleCategory,
            id: prev_articleID,
        },
    };
};

type SuggestedArticles = {
    prev_article?: SuggestedArticleAttributes;
    next_article?: SuggestedArticleAttributes;
};

type Tag = {
    attributes: {
        name: string;
    };
};

export type SuggestedArticleAttributes = {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    tags?: {
        data: Tag[];
    };
    category: {
        name: string;
        acronym: string;
        color: string;
    };
    publishedAt: string | number;
};

export type Article = {
    id: number;
    attributes: SuggestedArticleAttributes;
};
