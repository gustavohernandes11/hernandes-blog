import { Article } from "components/Article";
import { Title } from "components/Title";
import { useState } from "react";
import { IDbArticleRepository } from "../src/types/IDbArticleRepository";
import { IArticlePreview } from "../src/types/IArticlePreview";
import { PayloadRepository } from "../api/payloadCMS/PayloadRepository";
import Head from "next/head";

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
                    content="Pra falar de tecnologia, engenharia e outras coisas mais"
                />
                <meta
                    name="keywords"
                    content="Programação, Engenharia, Produção, Software"
                />
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
