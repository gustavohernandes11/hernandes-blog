import { Article } from "components/Article";
import { Title } from "components/Title";
import { IArticlePreview } from "types/article-protocols";
import { useState } from "react";
import { MDXLocalRepository } from "../api/MDXLocalRepository";

type HomeProps = {
    articlesPreview: IArticlePreview[];
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
            <p>Por enquanto é só...</p>
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const repository = new MDXLocalRepository();
    const articlesPreview = await repository.listArticlesPreview();
    return { props: { articlesPreview } };
};
