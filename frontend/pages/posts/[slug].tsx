import { Article } from "components/Article";
import { Header } from "components/Header";
import { Heading } from "components/Heading";
import { SliderComponent } from "components/Slider";

const items = [
    <Article
        categoryInitial="TS"
        title="Typescript: principais conceitos"
        color="#6181F1"
        date="5 de julho de 2022"
        excerpt="lorem ipsum bla bla bla"
        readingTime="10min"
        key={3}
        vertical={true}
    />,
    <Article
        categoryInitial="JS"
        title="Orientação a Objetos com Javascript"
        color="#F6E653"
        date="12 de março de 2022"
        excerpt="lorem ipsum bla bla bla"
        readingTime="3min"
        key={1}
        vertical={true} />,
    <Article
        categoryInitial="EX"
        title="Vantagens e desvantagens da linguagem Elixir."
        color="#BA49FF"
        date="12 de fevereiro de 2022"
        excerpt="lorem ipsum bla bla bla"
        readingTime="12min"
        key={2}
        vertical={true} />
]

const Post = () => {
    return (
        <>
            <Header />
            <div className="margin">
                <section>
                    <Heading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore.</Heading>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iusto qui asperiores ut dolorem aliquam maxime! Adipisci, quia tempore at neque sint cumque quisquam fuga rerum, veritatis sunt soluta atque!</p>
                    <hr />
                    <Heading as="h2" size="small">Recomendações</Heading>
                    <SliderComponent items={items} />
                </section>
            </div>
        </>
    );
};

export default Post;
