import { ArrowLeft } from "@styled-icons/fa-solid";
import { Button } from "components/Button";
import { Title } from "components/Title";
import Head from "next/head";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Hernandes | NOT FOUND </title>
            </Head>
            <Title>Página não encontrada</Title>
            <p>Tente novamente mais tarde.</p>
            <Button href="/" icon={<ArrowLeft size={16} />} iconPosition="left">
                Voltar para todos os artigos
            </Button>
        </>
    );
};

export default NotFound;
