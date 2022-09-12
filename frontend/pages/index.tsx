import { Content } from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import { Heading } from "../src/components/Heading";
import { PostWrapper } from "./../src/components/PostWrapper/";
import { PostDate } from "./../src/components/PostWrapper/PostDate/";
import { PostTitle } from "./../src/components/PostWrapper/PostTitle/";
import { PostDescription } from "./../src/components/PostWrapper/PostDescription/";
import { PostWrapperList } from "./../src/components/PostWrapperList/";
import type { NextPage } from "next";
import { Button } from "@mui/material";
import Head from "next/head";
import { loadPosts } from "api/loadPosts";
import { Key, useState } from "react";

const Home: NextPage = ({ data = [] }: any): JSX.Element => {
    const [posts, setPosts] = useState(data);

    const handleClick = async () => {
        setPosts(() => []);
        let resp = await loadPosts();
        setPosts(() => resp);
    };

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
                <Heading>Home</Heading>
                <Button onClick={handleClick}>LoadPosts</Button>
                <PostWrapperList>
                    {posts?.map((e) => (
                        <PostWrapper key={e.id} slug={e.attributes.Slug}>
                            <PostDate>now?</PostDate>
                            <PostTitle>{e.attributes.Title}</PostTitle>
                            <PostDescription>
                                {e.attributes.Excerpt}
                            </PostDescription>
                        </PostWrapper>
                    ))}
                </PostWrapperList>
                <Footer />
            </Content>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    try {
        const res = await fetch(`http://localhost:1337/api/posts`);
        const { data } = await res.json();

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
