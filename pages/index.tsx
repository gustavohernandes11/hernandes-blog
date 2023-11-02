import { Article } from "components/Article";
import { Title } from "components/Title";
import { useState } from "react";
import { IDbArticleRepository } from "../api/protocols";
import { IArticlePreview } from "../api/models";
import { PayloadRepository } from "../api/PayloadRepository";
import Head from "next/head";

type HomeProps = {
    articlesPreview: IArticlePreview[];
};

const Home = ({ articlesPreview }: HomeProps) => {
    const [articles] = useState(articlesPreview);

    return (
        <>
            <Head>
                <title>Hernandes | Início</title>
            </Head>
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
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const repository: IDbArticleRepository = new PayloadRepository();
    const articlesPreview = await repository.listArticlesPreview();
    return { props: { articlesPreview } };
};
