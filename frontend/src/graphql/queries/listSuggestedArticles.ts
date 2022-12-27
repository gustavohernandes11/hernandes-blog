import { gql } from "graphql-request";

export const GRAPHQL_FRAGMENTS_LIST_SUGGESTED_ARTICLES = gql`
    fragment Tags on Article {
        tags {
            data {
                attributes {
                    name
                }
            }
        }
    }

    fragment Category on Article {
        category {
            data {
                attributes {
                    name
                    acronym
                    color
                }
            }
        }
    }
`;

export const QUERY_LIST_SUGGESTED_ARTICLES = gql`
    ${GRAPHQL_FRAGMENTS_LIST_SUGGESTED_ARTICLES}

    query GET_SUGGESTED_ARTICLES($actualArticleID: ID) {
        next_article: articles(
            pagination: { limit: 1 }
            sort: "publishedAt:asc"
            filters: { id: { lt: $actualArticleID } }
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
                    slug
                    ...Tags
                    ...Category
                    publishedAt
                }
            }
        }

        prev_article: articles(
            pagination: { limit: 1 }
            sort: "publishedAt:desc"
            filters: { id: { gt: $actualArticleID } }
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
                    slug
                    ...Tags
                    ...Category
                    publishedAt
                }
            }
        }
    }
`;
