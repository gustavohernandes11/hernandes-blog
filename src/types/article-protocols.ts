export type IArticlePreview = {
    title: string;
    description: string;
    date: string;
    category: string;
    slug: string;
};

export type IArticle = {
    title: string;
    description: string;
    date: string;
    category: string;
    content: string;
};

export interface IListArticlesPreviewRepository {
    listArticlesPreview(): Promise<IArticlePreview[]>;
}

export interface ISearchArticlesRepository {
    searchArticles(text: string): Promise<IArticlePreview[]>;
}

export interface IGetArticleRepository {
    getArticle(slug: string): Promise<IArticle>;
}

export interface IListArticlesSlugRepository {
    listArticlesSlug(): Promise<string[]>;
}
