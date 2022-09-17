import { gql } from "graphql-request";

export const GRAPHQL_FRAGMENTS = gql`
   fragment cape on Post {
        Cape {
            data {
                attributes {
                    url
                    height
                    width
                }
            }
        }
    }
    fragment meta on Post {
        Meta {
            Description
            Title
            Keywords
        }
    }
    fragment post on Post {
        ...meta
        ...cape
        Title
        Content
        Reference
        Excerpt
        Slug
        Category
        publishedAt
    }

`;
