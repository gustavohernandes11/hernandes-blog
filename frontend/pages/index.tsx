import { Content } from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Heading } from "../src/components/Heading";
import { PostWrapper } from "./../src/components/PostWrapper/";
import { PostDate } from "./../src/components/PostWrapper/PostDate/";
import { PostTitle } from "./../src/components/PostWrapper/PostTitle/";
import { PostDescription } from "./../src/components/PostWrapper/PostDescription/";
import { PostWrapperList } from "./../src/components/PostWrapperList/";
import { getDate } from '../src/utils/handlingFunctions'

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    CardMedia,
    CardActionArea,
} from "@mui/material";
import Head from "next/head";
import { loadPosts } from "api/loadPosts";
import { useState } from "react";

const Home: NextPage = ({ data = [] }: any): JSX.Element => {
    const [posts, setPosts] = useState(data);

    return (
        <>
            <Head>
                <title>Hernandes.blog</title>
                <meta
                    name="description"
                    content="Blog para compartilhar dicas, teorias e códigos de desenvolvimento frontend: React, Typescript, Strapi, etc. "
                />
                <meta
                    name="keywords"
                    content="blog, javascript, strapi, typescript, html, css, snippets, tips, desenvolvimento, react, nextjs, frontend, web, github"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <Content>
                <Header>
                    <Heading>Início</Heading>
                </Header>
                <Grid container direction="row" xs={12}>
                    {posts?.map((e: any) => (
                        <Grid p={1} key={e.id} container xs={12} md={6} xl={4}>
                            <Link href={`/posts/${e.attributes.Slug}`}>
                                <Card elevation={8} color="inherit">
                                    <CardActionArea sx={{ heigth: "100%" }}>
                                    <CardHeader action={getDate(e?.attributes.publishedAt)} />
                                        <CardMedia>
                                            <Image
                                                src={
                                                    e?.attributes.Cape?.data
                                                        ?.attributes?.url
                                                }
                                                height={
                                                    e?.attributes.Cape?.data
                                                        ?.attributes?.heigth ||
                                                    720
                                                }
                                                width={
                                                    e?.attributes.Cape?.data
                                                        ?.attributes?.width ||
                                                    1200
                                                }
                                                layout="intrinsic"
                                            />
                                        </CardMedia>
                                        <CardContent>
                                            <PostTitle>
                                                {e.attributes.Title}
                                            </PostTitle>
                                            <PostDescription>
                                                {e.attributes.Excerpt}
                                            </PostDescription>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>

                <Footer />
            </Content>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    try {
        const data = await loadPosts();

        if (!data) {
            return {
                notFound: true,
            };
        }
        return {
            props: { data },
        };
    } catch (e) {
        return {
            props: { data: null },
            notFound: true,
        };
    }
}
