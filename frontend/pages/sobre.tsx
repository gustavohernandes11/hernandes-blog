import { Content } from "../src/components/Content";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Footer";

import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>H.blog | Sobre</title>
                <meta
                    name="description"
                    content="Página sobre o autor do blog"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content >
                <Heading>
                    About
                </Heading>
                <Typography mt={3} paragraph >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus ullam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis.
                </Typography>
                <Typography paragraph >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus ullam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis.
                </Typography>
                <Typography paragraph >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus ullam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis.
                </Typography>
            <Footer/>
            </Content>
        </>
    );
};

export default About;
