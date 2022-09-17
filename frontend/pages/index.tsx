import { Content } from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Heading } from "../src/components/Heading";
import { PostWrapper } from "./../src/components/PostWrapper/";
import { PostDate } from "../src/components/PostDate";
import { PostTitle } from "../src/components/PostTitle";
import { ArticleWrapperList } from "components/ArticleWrapperList";
import { ArticleModal } from "components/ArticleModal";
import { PostDescription } from "../src/components/PostDescription";
import { PostWrapperList } from "./../src/components/PostWrapperList/";
import { getDate } from "../src/utils/handlingFunctions";

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
import { Post } from "utils/commonTypes";

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
                <ArticleWrapperList>
                    {posts?.map((e: Post) => {
                            return <ArticleModal key={e.id} element={e} />

                    })}
                </ArticleWrapperList>

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
