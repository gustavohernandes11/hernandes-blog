import { config } from "../config";
import { request } from "graphql-request";
import { GRAPHQL_QUERY } from "../graphql/queries";

export type loadPostsVariables = {
    titleContains?: string;
    category?: string;
    postSlug?: string;
    postSearch?: string;
    sort?: string;
    limit?: number;
    start?: number;
};

export const loadPosts = async (
    variables: loadPostsVariables = {}
): any => {
    const defaultVariables = {
        sort: "createdAt:desc",
        limit: 10,
        start: 0,
    };

    const data = await request(config.graphqlUrl, GRAPHQL_QUERY, {
        ...variables,
        ...defaultVariables,
    });
    return data.posts.data;
};
