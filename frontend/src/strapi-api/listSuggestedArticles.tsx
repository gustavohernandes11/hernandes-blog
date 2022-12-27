import request from "graphql-request";
import { QUERY_LIST_SUGGESTED_ARTICLES } from "graphql/queries/listSuggestedArticles";

export const listSuggestedArticles = async (
    actualArticleID: number
): Promise<any> => {
    const suggestedArticles = await request(
        `${process.env.NEXT_PUBLIC_CMS_URL_GRAPHQL}`,
        QUERY_LIST_SUGGESTED_ARTICLES,
        {
            actualArticleID: actualArticleID,
        }
    );
    let prevArticle = suggestedArticles.prev_article;
    let nextArticle = suggestedArticles.prev_article;

    const pageData = { prevArticle, nextArticle };
    return pageData;
};
