import { Content } from "../src/components/Content";
import { MobileHeader } from "../src/components/MobileHeader";
import { Whatsapp } from '@styled-icons/boxicons-logos'
import { Title } from "../src/components/Title";
import { ContactButton } from "../src/components/ContactButton";
import { Footer } from "../src/components/Footer";

import type { NextPage } from "next";
import Head from "next/head";
import { Typography, Container, Button } from "@mui/material";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Hernandes | Sobre</title>
                <meta
                    name="description"
                    content="Página sobre o autor do blog"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content>
                <MobileHeader />
                <Container maxWidth="sm" sx={{ flex: 1, padding: '20px' }}>
                    <Title>
                        Sobre
                    </Title>

                    <Typography paragraph>
                        Me chamo <b> Gustavo Hernandes</b>, tenho 19 anos, sou do interior de São Paulo e durante os últimos
                        anos fiz da <b>programação web</b> o meu cotidiano.
                    </Typography>
                    <Typography paragraph>
                        Esse blog foi criado com o intúito de poder compartilhar conteúdo sobre assuntos que julgo útil, que estou aprendendo ou já tive experiência.
                    </Typography>
                    <Typography paragraph>
                        Fique à vontade para entrar em contato comigo.
                    </Typography>
                    <Button href="https://wa.me/55017996560749" target="_blank" startIcon={<Whatsapp size={25} />}>
                        <p>Whatsapp</p>
                    </Button>


                </Container>
                <Footer />
            </Content>
        </>
    );
};

export default About;
