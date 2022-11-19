import { gql } from "graphql-request";

export const GRAPHQL_QUERY_GET_ABOUT = gql`
    query GET_ABOUT {
        aboutme {
            data {
                attributes {
                    content
                }
            }
        }
    }
`;
