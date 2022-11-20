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
    let { pagination } = data.articles.meta;

    let articleList = data.articles.data.map((el: any): any => {
        let article: {
            title: string;
            excerpt: string;
            publishedAt: string | number;
            slug: string;
        } = el.attributes;
        const category: {
            acronym: string;
            color: string;
        } = el.attributes.category.data.attributes;
        const hero: {
            height: any;
            width: any;
            url: any;
            alternativeText: any;
        } = el.attributes.hero?.data.attributes;

        const formattedData = Intl.DateTimeFormat("pt-BR", {
            dateStyle: "medium",
        }).format(new Date(article.publishedAt));

        return { ...article, ...category, publishedAt: formattedData, hero };
    });

    const pageData = { articleList, pagination };
    return pageData;
};

export const readArticle = async (slug: string): Promise<ArticleData> => {
    const data = await request(config.graphqlUrl, QUERY_READ_ARTICLE, {
        slug,
    }).then((r) => r.articles.data[0]);

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

    const recommendedArticles = await listArticles({ limit: 3 });

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
        recommendedArticles,
        publishedAt: formattedData,
    };

    // @ts-ignore
    return articleData;
};

export interface ArticleData {
    title: string;
    excerpt: string;
    content?: string;
    slug: string;
    author: {
        name: string;
        bio: string;
        slug: string;
    };
    hero: {
        url: string;
        height: number;
        width: number;
        alternativeText: string;
    };
    category: {
        name: string;
        color: string;
        acronym: string;
    };
    metadata: {
        title: string;
        keywords: string;
        description: string;
    };
    recommendedArticles: [ArticleData];
    publishedAt: string;
}

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
