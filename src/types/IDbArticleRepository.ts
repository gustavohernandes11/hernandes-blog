import { IAbout } from "./IAbout";
import { IArticle } from "./IArticle";
import { IArticlePreview } from "./IArticlePreview";

export type IDbArticleRepository = IGetArticleRepository &
    IListArticlesPreviewRepository &
    IListArticlesSlugRepository &
    IGetAbout;

export interface IGetAbout {
    getAbout(): Promise<IAbout>;
}

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
