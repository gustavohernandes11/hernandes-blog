import { gql } from "graphql-request";

export const GRAPHQL_FRAGMENTS_READ_ARTICLE = gql`
    fragment Hero on Article {
        hero {
            data {
                attributes {
                    width
                    height
                    url
                    alternativeText
                }
            }
        }
    }

    fragment Meta on Article {
        meta {
            description
            title
            keywords
        }
    }

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
