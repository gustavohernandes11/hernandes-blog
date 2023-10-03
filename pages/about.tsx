import { Title } from "components/Title";
import type { NextPage } from "next";

const About: NextPage = () => {
    return (
        <>
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
