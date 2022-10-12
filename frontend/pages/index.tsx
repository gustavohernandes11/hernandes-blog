import { Content } from "../src/components/Content";
import { Footer } from "../src/components/Footer";
import { Seo } from "../src/components/Seo";
import { Heading } from "../src/components/Heading";
import { MobileHeader } from "../src/components/MobileHeader";
import { Logo } from "../src/components/Logo";

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
            <Seo
                title="Hernandes"
                description="Blog para compartilhar dicas, teorias e códigos de desenvolvimento frontend: React, Typescript, Strapi, e outros."
                keywords="blog, javascript, strapi, typescript, html, css, snippets, dicas, desenvolvimento, react, nextjs, frontend, web, github"
            />

            <MobileHeader>
                <Logo size="small" />
            </MobileHeader>
            <Content>

                <ArticleWrapperList>
                    {posts?.map((e: Post) => {
                        return <ArticleModal key={e.id} element={e} />;
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
