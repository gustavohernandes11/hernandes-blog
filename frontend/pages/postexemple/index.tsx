import { Content } from "../../src/components/Content";
import { Heading } from "../../src/components/Heading";
import { PostTitle } from "../../src/components/PostTitle";
import { PostSubtitle } from "../../src/components/PostSubtitle";
import { Code } from "../../src/components/Code";
 
import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

const PostExemple: NextPage = () => {
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
            <Content>
                <PostTitle>
                    Typescript: principais usos em projetos reais.
                </PostTitle>
                <PostSubtitle>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat
                </PostSubtitle>
                <Typography mt={3} paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus ullam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptas quod harum accusantium quam illum
                    dignissimos fugiat, doloribus ullam, laborum id ipsa est.
                    Debitis, quisquam. Distinctio laborum dolore exercitationem
                    aperiam reiciendis.
                </Typography>
                <Code>{`console.log()
                
                orem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus u
                    
                    llam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis. Lorem, ipsum do
                    `}</Code>
                <Heading>Ipsum dolor sit?</Heading>
                <Typography paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus ullam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptas quod harum accusantium quam illum
                    dignissimos fugiat, doloribus ullam, laborum id ipsa est.
                    Debitis, quisquam. Distinctio laborum dolore exercitationem
                    aperiam reiciendis.
                </Typography>
                <Heading>Ipsum dolor sit?</Heading>
                <Typography paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas quod harum accusantium quam illum dignissimos
                    fugiat, doloribus ullam, laborum id ipsa est. Debitis,
                    quisquam. Distinctio laborum dolore exercitationem aperiam
                    reiciendis. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptas quod harum accusantium quam illum
                    dignissimos fugiat, doloribus ullam, laborum id ipsa est.
                    Debitis, quisquam. Distinctio laborum dolore exercitationem
                    aperiam reiciendis. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptas quod harum accusantium quam illum
                    dignissimos fugiat, doloribus ullam, laborum id ipsa est.
                    Debitis, quisquam. Distinctio laborum dolore exercitationem
                    aperiam reiciendis.
                </Typography>
                <Heading>Ipsum dolor sit?</Heading>
                <Typography paragraph>
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

export default PostExemple;
