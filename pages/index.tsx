import { Article } from "components/Article";
import { Title } from "components/Title";
import Head from "next/head";
import { useState } from "react";
import { PayloadCMSRepository } from "../api/PayloadCMSRepository";
import { IArticlePreview } from "../src/types/IArticlePreview";
import { IDbArticleRepository } from "../src/types/IDbArticleRepository";

type IHomePageProps = {
    articlesPreview: IArticlePreview[];
};

const Home = ({ articlesPreview }: IHomePageProps) => {
    const [articles] = useState(articlesPreview);

    return (
        <>
            <Head>
                <title>Hernandes | Início</title>
                <meta
                    name="description"
                    content="Para rascunhar textos sobre engenharia, desenvolvimento de software, e outros"
                />
                <meta
                    name="keywords"
                    content="Typescript, programação, algoritmos, software, engenharia, produção"
                />
            </Head>
            <Title>Início</Title>
            {articles.map((article) => (
                <Article {...article} />
            ))}
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const repository: IDbArticleRepository = new PayloadCMSRepository();
    const articlesPreview = await repository.listArticlesPreview();
    return { props: { articlesPreview } };
};
