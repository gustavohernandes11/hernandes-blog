import { Content } from "../src/components/Content";
import { Heading } from "../src/components/Heading";
import { PostWrapper } from "./../src/components/PostWrapper/";
import { PostDate } from "./../src/components/PostWrapper/PostDate/";
import { PostTitle } from "./../src/components/PostWrapper/PostTitle/";
import { PostDescription } from "./../src/components/PostWrapper/PostDescription/";
import { PostWrapperList } from "./../src/components/PostWrapperList/";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
                <Heading>Home</Heading>
                <PostWrapperList>
                    <PostWrapper slug="slug">
                        <PostDate>12 de março de 1976</PostDate>
                        <PostTitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.{" "}
                        </PostTitle>
                        <PostDescription>
                            Ullam quos hic ratione reiciendis porro voluptas
                            nisi dolorem quibusdam minima soluta, reprehenderit,
                            nobis id deserunt eius quasi veniam excepturi, eum
                            perferendis?
                        </PostDescription>
                    </PostWrapper>
                    <PostWrapper slug="slug">
                        <PostDate>12 de março de 1976</PostDate>
                        <PostTitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.{" "}
                        </PostTitle>
                        <PostDescription>
                            Ullam quos hic ratione reiciendis porro voluptas
                            nisi dolorem quibusdam minima soluta, reprehenderit,
                            nobis id deserunt eius quasi veniam excepturi, eum
                            perferendis?
                        </PostDescription>
                    </PostWrapper>
                    <PostWrapper slug="slug">
                        <PostDate>12 de março de 1976</PostDate>
                        <PostTitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.{" "}
                        </PostTitle>
                        <PostDescription>
                            Ullam quos hic ratione reiciendis porro voluptas
                            nisi dolorem quibusdam minima soluta, reprehenderit,
                            nobis id deserunt eius quasi veniam excepturi, eum
                            perferendis?
                        </PostDescription>
                    </PostWrapper>
                </PostWrapperList>
            </Content>
        </>
    );
};

export default Home;
