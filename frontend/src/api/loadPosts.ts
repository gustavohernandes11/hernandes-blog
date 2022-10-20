import { config } from "../config";
import { request } from "graphql-request";
import { GRAPHQL_QUERY } from "../graphql/queries";
import type { Posts } from "../utils/commonTypes";
import type { loadPostsVariables } from "../utils/commonTypes";



export const loadPosts = async (
    variables: loadPostsVariables = {}
): Promise<Posts> => {
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
