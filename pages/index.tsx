import { ArrowRight } from "@styled-icons/fa-solid";
import { Article } from "components/Article";
import { Button } from "components/Button";
import { JustifyEnd } from "components/JustifyEnd";
import { Title } from "components/Title";
import { serialize } from "next-mdx-remote/serialize";
import { readFileSync, readdirSync } from "fs";
import { ArticlePreview } from "types/ArticlePreview";
import { useState } from "react";
import path from "path";

type HomeProps = {
    articlesPreview: ArticlePreview[];
};

const Home = ({ articlesPreview }: HomeProps) => {
    const [articles] = useState(articlesPreview);

    return (
        <>
            <Title>Início</Title>
            {articles.map((e) => (
                <Article
                    title={e.title}
                    category={e.category}
                    description={e.description}
                    date={e.date}
                    slug={e.slug}
                    key={e.title}
                />
            ))}
            <JustifyEnd>
                <Button icon={<ArrowRight size={16} />} iconPosition="right">
                    Próxima página
                </Button>
            </JustifyEnd>
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    let articlesPreview: ArticlePreview[] = [];

    const dirPath = path.join(process.cwd(), "_articles");
    const filePaths = readdirSync(dirPath).filter(
        (filePath) => path.extname(filePath).toLowerCase() === ".mdx"
    );

    for (const filePath of filePaths) {
        let file = readFileSync(path.join(dirPath, filePath), "utf-8");
        const serializedArticle = await serialize(file, {
            parseFrontmatter: true,
        });
        console.log("pathname: " + file);
        articlesPreview.push({
            ...serializedArticle.frontmatter,
            slug: filePath.replace(".mdx", ""),
        } as ArticlePreview);
    }

    return { props: { articlesPreview } };
};
