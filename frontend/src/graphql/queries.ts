import { gql } from "graphql-request";
import { GRAPHQL_FRAGMENTS } from "./fragments";

export const GRAPHQL_QUERY = gql`
    ${GRAPHQL_FRAGMENTS}
    query GET_POSTS(
        $categorySlug: String
      	$titleContains: String
        $postSlug: String
        $sort: [String] = "createdAt:desc"
        $start: Int = 0
        $limit: Int = 10
    ) {
        posts(
            pagination: { start: $start, limit: $limit }
            filters: { Slug:{ eq: $postSlug}, Category: {eq: $categorySlug }, Title: {contains: $titleContains} }
            sort: $sort
        ) {
            data {
                id
                attributes {
                    ...cape
                    ...meta
                    ...post
                }
            }
        }
    }
`;
