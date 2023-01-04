export type listArticlesVariables = {
    start?: string;
    limit?: string | number;
    postSlug?: string;
    category?: string;
    titleContains?: string;
    sort?: string;
};

export interface ArticleData {
    id: number;
    title: string;
    excerpt: string;
    content?: string;
    slug: string;
    author: {
        name: string;
        bio: string;
        slug: string;
    };
    hero: {
        url: string;
        height: number;
        width: number;
        alternativeText: string;
    };
    category: {
        name: string;
        color: string;
        acronym: string;
    };
    metadata: {
        title: string;
        keywords: string;
        description: string;
    };
    recommendedArticles: [ArticleData];
    publishedAt: string;
}

export type AuthorType = {
    data: {
        attributes: {
            name: string;
            bio: string;
            avatar: {
                data: string;
            };
        };
    };
};

export type HeroType = {
    data: {
        attributes: {
            width: number;
            height: number;
            url: string;
            alternativeText: string;
        };
    };
};

export type MetaType = {
    description: string;
    title: string;
    keywords: string;
};

export type RawArticle = {
    id: number;
    attributes: {
        title: string;
        excerpt: string;
        content?: string;
        slug: string;
        author: AuthorType;
        tags: {
            data: [
                {
                    attributes: {
                        name: string;
                    };
                },
                {
                    attributes: {
                        name: string;
                    };
                }
            ];
        };
        meta?: MetaType;
        hero?: HeroType;
        category: {
            data: {
                attributes: {
                    name: string;
                    acronym: string;
                    color: string;
                };
            };
        };
        publishedAt: string | number;
    };
};
