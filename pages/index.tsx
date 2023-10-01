import { ArrowLeft, ArrowRight } from "@styled-icons/fa-solid";
import { Article } from "components/Article";
import { Button } from "components/Button";
import { JustifyEnd } from "components/JustifyEnd";
import { Section } from "components/Section";
import { Title } from "components/Title";
import { NextPage } from "next";

const Home: NextPage = () => {
    const articles = [
        {
            title: "Lorem ipsum dolor sit amet",
            description: "lorem ipsum dolor sit amet! ",
            date: "12 de março de 2045",
            category: "lorems",
            slug: "lorem-ipsum-1",
        },
        {
            title: "Lorem ipsum dolor sit amet uorem ipsum dolor sit amet",
            description: "lorem ipsum dolor sit amet! ",
            date: "12 de março de 2045",
            category: "lorems",
            slug: "lorem-ipsum-2",
        },
        {
            title: "Lorem ipsum dolor sit amet aorem ipsum dolor amet aorem ipsum dolor sit ametLorem ipsum dolor sit amet",
            description: "lorem ipsum dolor sit amet! ",
            date: "12 de março de 2045",
            category: "lorems",
            slug: "lorem-ipsum-3",
        },
        {
            title: "Lorem ipsum dolor amet aorem ipsum dolor sit amet",
            description: "lorem ipsum dolor sit amet! ",
            date: "12 de março de 2045",
            category: "lorems",
            slug: "lorem-ipsum-4",
        },
    ];
    return (
        <>
            <Title>Início</Title>
            {articles.map((e) => (
                <Article
                    title={e.title}
                    category={e.category}
                    description={e.description}
                    date={e.date}
                    slug={e.slug}
                    key={e.title}
                />
            ))}
            <JustifyEnd>
                <Button icon={<ArrowRight size={16} />} iconPosition="right">
                    Próxima página
                </Button>
            </JustifyEnd>
        </>
    );
};

export default Home;
