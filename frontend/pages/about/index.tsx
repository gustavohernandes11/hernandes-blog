import { Content } from "../../src/components/Content";
import { Heading } from "../../src/components/Heading";

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../src/styles/About.module.css";
import { Typography } from "@mui/material";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>.blog</title>
                <meta
                    name="description"
                    content="Blog to share develevopment tips and ticks of Javascript, Typscript, Html, Node, CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content >
                <Heading className="main-heading">
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
            </Content>
        </>
    );
};

export default About;
