import { Content } from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Heading } from "../src/components/Heading";

import { Button } from '@mui/material'

import { ArticleWrapperList } from "components/ArticleWrapperList";
import { ArticleModal } from "components/ArticleModal";

import type { NextPage } from "next";

import Head from "next/head";
import { loadPosts } from "api/loadPosts";
import { useState } from "react";
import { Post } from "utils/commonTypes";

const Home: NextPage = ({ data = [] }: any): JSX.Element => {
    const [posts] = useState(data);
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
