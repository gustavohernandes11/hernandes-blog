import { IArticle, IArticlePreview } from "./models";

export type IDbArticleRepository = IGetArticleRepository &
    IListArticlesPreviewRepository &
    ISearchArticlesRepository &
    IListArticlesSlugRepository;

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
