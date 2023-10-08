import { IArticle, IArticlePreview } from "./article-models";

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
