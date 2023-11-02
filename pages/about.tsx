import { Title } from "components/Title";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Hernandes | Sobre</title>
            </Head>
            <Title>Sobre</Title>
            <p>
                Pequeno "blog" para compartilhar algumas resenhas e
                conhecimentos. Nenhum trecho aqui foi gerado através de
                Inteligência Artificial.
            </p>
        </>
    );
};

export default About;
