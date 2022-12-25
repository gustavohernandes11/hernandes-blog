import { request } from "graphql-request";
import { GRAPHQL_QUERY_GET_ABOUT } from "graphql/queries/getAbout";

export const getAbout = async (): Promise<Aboutme> => {
    const response = await request(
        `${process.env.NEXT_PUBLIC_CMS_URL_GRAPHQL}`,
        GRAPHQL_QUERY_GET_ABOUT
    );

    return response.aboutme.data.attributes.content;
};

type Aboutme = {
    content: String;
    createdAt?: String;
    updatedAt?: String;
    publishedAt?: String;
};
