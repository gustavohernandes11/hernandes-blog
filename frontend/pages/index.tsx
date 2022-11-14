import type { NextPage } from "next";
import { HomeHeader } from '../src/components/HomeHeader'
import { ArticleList } from '../src/components/ArticleList'
import { Article } from "components/Article";
import { Pagination } from "components/Pagination";
const Home: NextPage = (): any => {
    return (
        <>
            <HomeHeader />
            <section className="margin">
                <ArticleList>
                    <Article
                        categoryInitial="JS"
                        title="Orientação a Objetos com Javascript"
                        color="#F6E653"
                        date="12 de março de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="3min"
                        key={1} />
                    <Article
                        categoryInitial="EX"
                        title="Vantagens e desvantagens da linguagem Elixir."
                        color="#BA49FF"
                        date="12 de fevereiro de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="12min"
                        key={2} />
                    <Article
                        categoryInitial="TS"
                        title="Typescript: principais conceitos"
                        color="#6181F1"
                        date="5 de julho de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="10min"
                        key={3} />
                    <Article
                        categoryInitial="JS"
                        title="Orientação a Objetos com Javascript"
                        color="#F6E653"
                        date="12 de março de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="3min"
                        key={1} />
                    <Article
                        categoryInitial="EX"
                        title="Vantagens e desvantagens da linguagem Elixir."
                        color="#BA49FF"
                        date="12 de fevereiro de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="12min"
                        key={2} />
                    <Article
                        categoryInitial="TS"
                        title="Typescript: principais conceitos"
                        color="#6181F1"
                        date="5 de julho de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="10min"
                        key={3} />
                    <Article
                        categoryInitial="JS"
                        title="Orientação a Objetos com Javascript"
                        color="#F6E653"
                        date="12 de março de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="3min"
                        key={1} />
                    <Article
                        categoryInitial="EX"
                        title="Vantagens e desvantagens da linguagem Elixir."
                        color="#BA49FF"
                        date="12 de fevereiro de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="12min"
                        key={2} />
                    <Article
                        categoryInitial="TS"
                        title="Typescript: principais conceitos"
                        color="#6181F1"
                        date="5 de julho de 2022"
                        excerpt="lorem ipsum bla bla bla"
                        readingTime="10min"
                        key={3} />
                </ArticleList>
                <Pagination count={10} page={1} onChange={() => { }} />
            </section>

        </>
    );
};

export default Home;

