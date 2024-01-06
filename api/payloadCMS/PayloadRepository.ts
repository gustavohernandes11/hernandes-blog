import { IArticle } from "../../src/types/IArticle";
import { IArticlePreview } from "../../src/types/IArticlePreview";
import { IDbArticleRepository } from "../../src/types/IDbArticleRepository";
import { buildMarkdownLines } from "./buildMarkdownLines";
import { formatDate } from "../../src/utils/formatDate";

export class PayloadRepository implements IDbArticleRepository {
    private readonly url = process.env.NEXT_PUBLIC_API_URL;

    async getArticle(slug: string): Promise<IArticle> {
        const response = await fetch(
            this.url + "/articles?where[slug][equals]=" + slug
        ).then((d) => d.json());

        const { docs } = response;

        return serializeArticle(docs[0]);
    }
    async listArticlesPreview(): Promise<IArticlePreview[]> {
        const response = await fetch(this.url + "/articles").then((d) =>
            d.json()
        );
        const { docs } = response;

        return docs.map((article: any) => serializePreview(article));
    }
    async listArticlesSlug(): Promise<string[]> {
        const response = await fetch(this.url + "/articles").then((d) =>
            d.json()
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
    content: buildMarkdownLines(article.content),
    meta: article.meta,
});
