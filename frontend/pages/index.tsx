import type { NextPage } from "next";
import { ArticleList } from '../src/components/ArticleList'
import { Article } from "components/Article";
import { Pagination } from "components/Pagination";
import { useScreen } from "hooks/useScreen";
import { Header } from "components/_mobile/Header";
import { SocialBar } from "components/SocialBar";
import { listArticles } from "services/articles";
import { useEffect, useState } from "react";


const Home: NextPage = ({ articleList }: any) => {
    const [articles] = useState(articleList)
    useEffect(() => {
        console.log(articles)
    }, [articleList])

    const { isTablet } = useScreen()
    return (
        <>
            {isTablet && <Header goBackButton={false} />}
            {isTablet && <SocialBar />}
            <section className="wrapper-content">

                <ArticleList>
                    {articles.map((e: { slug: string; acronym: string; title: string; color: string; publishedAt: string | number; excerpt: string; }) => {
                        return <Article
                            slug={e.slug}
                            categoryInitial={e.acronym}
                            title={e.title}
                            color={e.color}
                            date={e.publishedAt}
                            excerpt={e.excerpt}
                            readingTime="10min"
                        />
                    })}
                </ArticleList>
                <Pagination count={10} page={1} onChange={() => { }} />
            </section>

        </>
    );
};

export default Home;


export async function getStaticProps() {
    const data = await listArticles();

    let articleList = data.map(el => {
        let article: { title: string, excerpt: string, publishedAt: string | number, slug: string } = el.attributes
        const category: {
            acronym: string, color: string
        } = el.attributes.category.data.attributes

        return { ...article, ...category }

    })


    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { articleList },
    };
}

