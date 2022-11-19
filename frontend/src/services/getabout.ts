import { config } from "../config";
import { request } from "graphql-request";
import { GRAPHQL_QUERY_GET_ABOUT } from "graphql/queries/getAbout";

export const getAbout = async (): Promise<Aboutme> => {
    const response = await request(config.graphqlUrl, GRAPHQL_QUERY_GET_ABOUT);

    console.log(response.aboutme.data.attributes.content);
    return response.aboutme.data.attributes.content;
};

type Aboutme = {
    content: String;
    createdAt?: String;
    updatedAt?: String;
    publishedAt?: String;
};
