import { readdirSync, readFileSync } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import smartypants from "remark-smartypants";

import remarkGfm from "remark-gfm";
import {
    IArticle,
    IArticlePreview,
    IDbArticleRepository,
} from "../src/types/article-protocols";

export class MDXLocalRepository
    implements
    IDbArticleRepository
{
    async listArticlesSlug(): Promise<string[]> {
        const dirPath = path.join(process.cwd(), "database");
        const filePaths = readdirSync(dirPath).filter(
            (filePath) => path.extname(filePath).toLowerCase() === ".mdx"
        );
        const slugs = filePaths.map((file) => file.replace(".mdx", ""));
        return slugs;
    }
    async getArticle(slug: string): Promise<IArticle> {
        const fileDir = path.join(process.cwd(), "database", slug + ".mdx");
        const articleFile = readFileSync(fileDir, "utf-8");
        const MdxSource = await serialize(articleFile, {
            mdxOptions: {
                remarkPlugins: [remarkGfm, smartypants],
                remarkRehypeOptions: { allowDangerousHtml: true },
            },
            parseFrontmatter: true,
        });
        return {
            ...MdxSource.frontmatter,
            content: MdxSource.compiledSource,
        } as IArticle;
    }
    async listArticlesPreview(): Promise<IArticlePreview[]> {
        let articlesPreview: IArticlePreview[] = [];

        const dirPath = path.join(process.cwd(), "database");
        const filePaths = readdirSync(dirPath).filter(
            (filePath) => path.extname(filePath).toLowerCase() === ".mdx"
        );

        for (const filePath of filePaths) {
            let file = readFileSync(path.join(dirPath, filePath), "utf-8");
            const serializedArticle = await serialize(file, {
                parseFrontmatter: true,
            });
            articlesPreview.push({
                ...serializedArticle.frontmatter,
                slug: filePath.replace(".mdx", ""),
            } as IArticlePreview);
        }
        return articlesPreview;
    }
    searchArticles(text: string): Promise<IArticlePreview[]> {
        throw new Error("Method not implemented.");
    }
}
