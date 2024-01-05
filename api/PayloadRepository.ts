import { IArticle } from "../src/types/IArticle";
import { IArticlePreview } from "../src/types/IArticlePreview";
import { IDbArticleRepository } from "../src/types/IDbArticleRepository";

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

    async searchArticles(text: string): Promise<IArticlePreview[]> {
        throw new Error("Method not implemented.");
    }
}

const buildMarkdownLines = (nestedObject: any[]): string => {
    let markdownLines = "";
    nestedObject.map((node) => {
        if (node.type === "upload") {
            markdownLines += "\n";
            markdownLines += `![${node.value.alt}](${node.value.url})`;
        }
        node.children?.map((children: any) => {
            if (children.type === "link") {
                if (children.newTab)
                    markdownLines += `<a href="${children.url}" target="_blank">${children.children[0].text}</a>`;
                else
                    markdownLines += `[${children.children[0].text}](${children.url})`;
            } else {
                markdownLines += children.text;
            }
        });
        markdownLines += "\n";
    });
    return markdownLines;
};
const formatDate = (utcString: string): string => {
    return new Date(utcString).toLocaleString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

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
