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
                <Container maxWidth="sm" sx={{ flex: 1 }}>
                    <Title>
                        Sobre
                    </Title>

                    <Typography paragraph>
                        Me chamo Gustavo Hernandes, tenho 19 anos, sou do interior de São paulo e durante os ultimos
                        anos desenvolvi um grande interesse pela programação e todo o seu ecosistema.
                    </Typography>
                    <Typography paragraph>
                        Esse blog foi criado com o intúito de ensinar algumas coisas que estou aprendendo. Eu realmente espero poder te ajudar em algumas dúvidas ou dicas por aqui.
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
