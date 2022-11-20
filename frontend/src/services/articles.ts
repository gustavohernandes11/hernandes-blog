import { config } from "../config";
import { request } from "graphql-request";
import { QUERY_LIST_ARTICLES } from "graphql/queries/listArticles";
import { QUERY_READ_ARTICLE } from "graphql/queries/readArticle";

type listArticlesVariables = {
    start?: string;
    limit?: string | number;
    postSlug?: string;
    category?: string;
    titleContains?: string;
    sort?: string;
};

export const listArticles = async (
    variables: listArticlesVariables = {}
): Promise<any> => {
    const defaultVariables = {
        sort: "createdAt:desc",
        limit: 10,
        start: 0,
    };

    const data = await request(config.graphqlUrl, QUERY_LIST_ARTICLES, {
        ...variables,
        ...defaultVariables,
    });
    return data;
};

export const readArticle = async (slug: string): Promise<RawArticle> => {
    const data = await request(config.graphqlUrl, QUERY_READ_ARTICLE, {
        slug,
    });
    return data.articles.data[0];
};

export type AuthorType = {
    data: {
        attributes: {
            name: string;
            bio: string;
            avatar: {
                data: string;
            };
        };
    };
};

export type HeroType = {
    data: {
        attributes: {
            width: number;
            height: number;
            url: string;
            alternativeText: string;
        };
    };
};

export type MetaType = {
    description: string;
    title: string;
    keywords: string;
};

export type RawArticle = {
    id: number;
    attributes: {
        title: string;
        excerpt: string;
        content?: string;
        slug: string;
        author: AuthorType;
        tags: {
            data: [
                {
                    attributes: {
                        name: string;
                    };
                },
                {
                    attributes: {
                        name: string;
                    };
                }
            ];
        };
        meta?: MetaType;
        hero?: HeroType;
        category: {
            data: {
                attributes: {
                    name: string;
                    acronym: string;
                    color: string;
                };
            };
        };
        publishedAt: string | number;
    };
};
