import type { NextPage } from "next";
import { ArticleList } from '../src/components/ArticleList'
import { Article } from "components/Article";
import { Pagination } from "components/Pagination";
import { useScreen } from "hooks/useScreen";
import { Header } from "components/_mobile/Header";
import { SocialBar } from "components/SocialBar";
import { listArticles } from "services/articles";
import { useState } from "react";


const Home: NextPage = ({ pageData }: any) => {

    const [articles] = useState(pageData.articleList)
    const [pagination] = useState(pageData.pagination)

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
                        />
                    })}
                </ArticleList>
                {pagination.total > 10 && <Pagination count={pagination.pageCount} page={pagination.page} onChange={() => { }} />}
            </section>

        </>
    );
};

export default Home;


export async function getStaticProps() {
    const data = await listArticles()

    let { pagination } = data.articles.meta

    let articleList = data.articles.data.map((el: any): any => {
        let article: { title: string, excerpt: string, publishedAt: string | number, slug: string } = el.attributes
        const category: {
            acronym: string, color: string
        } = el.attributes.category.data.attributes


        const formattedData = Intl.DateTimeFormat('pt-BR', { dateStyle: "medium" }).format(new Date(article.publishedAt))

        return { ...article, ...category, publishedAt: formattedData }

    })

    const pageData = { articleList, pagination }


    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { pageData }
    };
}

