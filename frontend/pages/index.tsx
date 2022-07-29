import { Content } from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import { Heading } from "../src/components/Heading";
import { PostWrapper } from "./../src/components/PostWrapper/";
import { PostDate } from "./../src/components/PostWrapper/PostDate/";
import { PostTitle } from "./../src/components/PostWrapper/PostTitle/";
import { PostDescription } from "./../src/components/PostWrapper/PostDescription/";
import { PostWrapperList } from "./../src/components/PostWrapperList/";
import type { NextPage } from "next";
import Head from "next/head";
import { Key, useState } from "react";

const Home: NextPage = ({ data = [] }: any): JSX.Element => {
    const [posts] = useState(data);

    interface PostWrapperTypes {
        id: Key | null | undefined;
        attributes: {
            slug: string;
            date: string;
            title: string;
            Post_description: string;
        };
    }

    return (
        <>
            <Head>
                <title>Hernandes.blog</title>
            </Head>
            <Content>
                <Heading>Home</Heading>
                <PostWrapperList>
                    {posts?.map((e: PostWrapperTypes) => (
                        <PostWrapper key={e.id} slug={e.attributes.slug}>
                            <PostDate>{e.attributes.date}</PostDate>
                            <PostTitle>{e.attributes.title}</PostTitle>
                            <PostDescription>
                                {e.attributes.Post_description}
                            </PostDescription>
                        </PostWrapper>
                    ))}
                </PostWrapperList>
            </Content>
            <Footer />

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
