import request from "graphql-request";
import { QUERY_LIST_ARTICLES } from "graphql/queries/listArticles";
import { listArticlesVariables } from "./strapiApiTypes";

export const listArticles = async (
    variables: listArticlesVariables = {}
): Promise<any> => {
    const defaultVariables = {
        sort: "createdAt:desc",
        limit: 10,
        start: 0,
    };

    const data = await request(
        `${process.env.NEXT_PUBLIC_CMS_URL_GRAPHQL}`,
        QUERY_LIST_ARTICLES,
        {
            ...variables,
            ...defaultVariables,
        }
    );
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
            name: string;
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

        return { ...article, category, publishedAt: formattedData, hero };
    });

    const pageData = { articleList, pagination };
    return pageData;
};
