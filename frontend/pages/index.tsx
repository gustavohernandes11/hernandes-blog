import { Content } from "../src/components/Content";
import { Heading } from "../src/components/Heading";
import { PostWrapper } from "./../src/components/PostWrapper/";
import { PostDate } from "./../src/components/PostWrapper/PostDate/";
import { PostTitle } from "./../src/components/PostWrapper/PostTitle/";
import { PostDescription } from "./../src/components/PostWrapper/PostDescription/";
import { PostWrapperList } from "./../src/components/PostWrapperList/";
import type { NextPage } from "next";
import Head from "next/head";
import { Key, useState } from "react";

const Home: NextPage = ({ data = [] }): JSX.Element => {
    const [posts, setPosts] = useState(data);

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
                <title>H!</title>
            </Head>
            <Content>
                <Heading>Home</Heading>
                <PostWrapperList>
                    {posts.map((e: PostWrapperTypes) => (
                        <PostWrapper key={e.id} slug={e.attributes.slug}>
                            <PostDate>{e.attributes.date}</PostDate>
                            <PostTitle>{e.attributes.title}</PostTitle>
                            <PostDescription>{e.attributes.Post_description}</PostDescription>
                        </PostWrapper>
                    ))}
                </PostWrapperList>
            </Content>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const res = await fetch(`http://localhost:1337/api/posts`);
    const { data } = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
        revalidate: 180,
    };
}
