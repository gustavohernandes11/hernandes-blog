import { gql } from "graphql-request";
import {
    GRAPHQL_FRAGMENTS_LIST_ARTICLES,
    GRAPHQL_FRAGMENTS_READ_ARTICLE,
} from "./fragments";

export const QUERY_LIST_ARTICLES = gql`
    ${GRAPHQL_FRAGMENTS_LIST_ARTICLES}
    query LIST_ARTICLES(
        $category: StringFilterInput
        $titleContains: String
        $postSlug: String
        $sort: [String] = "createdAt:desc"
        $start: Int = 0
        $limit: Int = 10
    ) {
        articles(
            pagination: { start: $start, limit: $limit }
            filters: {
                slug: { eq: $postSlug }
                category: { name: $category }
                title: { contains: $titleContains }
            }
            sort: $sort
        ) {
            meta {
                pagination {
                    total
                    pageCount
                    pageSize
                    page
                }
            }
            data {
                id
                attributes {
                    title
                    excerpt
                    # content
                    # ...Meta
                    # ...Hero
                    slug
                    ...Author
                    ...Tags
                    ...Category
                    publishedAt
                }
            }
        }
    }
`;

export const QUERY_READ_ARTICLE = gql`
    ${GRAPHQL_FRAGMENTS_READ_ARTICLE}
    query READ_ARTICLE($postSlug: String) {
        articles(filters: { slug: { eq: $postSlug } }) {
            data {
                id
                attributes {
                    title
                    excerpt
                    content
                    slug
                    ...Author
                    ...Tags
                    ...Meta
                    ...Hero
                    ...Category
                    publishedAt
                }
            }
        }
    }
`;
