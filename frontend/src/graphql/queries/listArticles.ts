import { gql } from "graphql-request";

export const GRAPHQL_FRAGMENTS_LIST_ARTICLES = gql`
    fragment Author on Article {
        author {
            data {
                attributes {
                    name
                    bio
                    avatar {
                        data {
                            attributes {
                                url
                                width
                                height
                                alternativeText
                            }
                        }
                    }
                }
            }
        }
    }

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
