import { RenderContent } from "components/RenderContent";
import Head from "next/head";
import { useState } from "react";
import { IAbout } from "types/IAbout";
import { PayloadCMSRepository } from "../api/PayloadCMSRepository";
import { IDbArticleRepository } from "../src/types/IDbArticleRepository";

type IAboutPageProps = {
    aboutContent: IAbout;
};

const Home = ({ aboutContent }: IAboutPageProps) => {
    const [about] = useState(aboutContent);

    return (
        <>
            <Head>
                <title>Hernandes | {about.meta.title || "Sobre"}</title>
                <meta name="description" content={about.meta.description} />
                <meta name="keywords" content={about.meta.keywords} />
            </Head>
            <RenderContent content={about.content} />
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const repository: IDbArticleRepository = new PayloadCMSRepository();
    const aboutContent = await repository.getAbout();
    return { props: { aboutContent } };
};
