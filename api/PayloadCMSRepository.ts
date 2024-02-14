import { IAbout } from "types/IAbout";
import { IArticle } from "../src/types/IArticle";
import { IArticlePreview } from "../src/types/IArticlePreview";
import { IDbArticleRepository } from "../src/types/IDbArticleRepository";
import { formatDate } from "../src/utils/formatDate";

export class PayloadCMSRepository implements IDbArticleRepository {
    private readonly url = process.env.NEXT_PUBLIC_API_URL;

    async getAbout(): Promise<IAbout> {
        const response = await fetch(
            this.url + "/globals/aboutblog?locale=undefined&draft=false&depth=1"
        ).then((d) => d.json());
        return serializeAbout(response);
    }
    async getArticle(slug: string): Promise<IArticle> {
        const response = await fetch(
            this.url + "/articles?where[slug][equals]=" + slug
        ).then((d) => d.json());
        const { docs } = response;
        return serializeArticle(docs[0]);
    }
    async listArticlesPreview(): Promise<IArticlePreview[]> {
        const response = await fetch(this.url + "/articles?limit=100").then(
            (d) => d.json()
        );
        const { docs } = response;
        return docs.map((article: any) => serializePreview(article));
    }
    async listArticlesSlug(): Promise<string[]> {
        const response = await fetch(this.url + "/articles?limit=100").then(
            (d) => d.json()
        );
        const { docs } = response;
        return docs.map((article: any) => article.slug);
    }
}

const serializePreview = (article: any): IArticlePreview => ({
    title: article.title,
    description: article.description,
    category: article.category.name,
    date: formatDate(article.createdAt),
    slug: article.slug,
});

const serializeArticle = (article: any): IArticle => ({
    title: article.title,
    description: article.description,
    category: article.category.name,
    date: formatDate(article.createdAt),
    content: article.content,
    meta: article.meta,
});

const serializeAbout = (about: any): IAbout => ({
    content: about.content,
    meta: about.meta,
});
