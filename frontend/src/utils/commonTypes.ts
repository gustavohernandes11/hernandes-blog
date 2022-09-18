

interface ImageAttributes {
    url: string;
    height: number;
    width: number;
}

interface CapeData {
    attributes: ImageAttributes;
}

interface Cape {
    data: CapeData;
}

interface Meta {
    Description: string;
    Title: string;
    Keywords: string;
}

interface PostAttributes {
    Cape: Cape;
    Meta: Meta;
    Title: string;
    Content: string;
    Reference: string;
    Excerpt: string;
    Slug: string;
    Category: string;
    publishedAt: string
}

export interface Post {
    id: string;
    attributes: PostAttributes;
}

export interface Posts {
    map(arg0: (e: Post) => { params: { slug: string; }; }): unknown;
    data: Post[];
}

export interface Data {
    posts: Posts;
}

export interface GraphqlResponse {
    data: Data;
}

export type loadPostsVariables = {
    titleContains?: string;
    category?: string;
    postSlug?: string;
    postSearch?: string;
    sort?: string;
    limit?: number;
    start?: number;
};
