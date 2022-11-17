import { Article } from "components/Article";
import { Header } from "components/_mobile/Header";
import { Image } from "components/Image";
import { Heading } from "components/Heading";
import { SliderComponent } from "components/_mobile/Slider";
import capeIMG from '../../src/assets/imgs/cape-exemple.png'
import { Container } from "components/Container";
import ReactMarkdown from "react-markdown";
import { Title } from "components/Title";
import { RecommendedArticles } from "components/RecommendedArticles";
import { IconButton } from "components/IconButton";
import { ArrowLeft } from "@styled-icons/feather";
import { useScreen } from "hooks/useScreen";
import { GoTopButton } from "components/GoTopButton";
import { useRouter } from "next/router";


const Post = () => {
    const { isTablet, isDesktopOrLaptop } = useScreen()
    const router = useRouter()

    return (
        <>
            {isTablet && <Header />}
            <div className="post-wrapper-content">
                {isDesktopOrLaptop &&
                    <Container as="header">
                        <IconButton onClick={() => router.back()} className="go-back">
                            <ArrowLeft size={20} /> Voltar
                        </IconButton>
                    </Container>
                }
                <Image src={capeIMG} cape={true} alt="imagem de capa do artigo" />
                <Container as="span" align="center"><p className="post-info-paragraph">3min de leitura - Nodejs</p></Container>

                <section>
                    <Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore.</Title>
                    <ReactMarkdown>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.

                        # heading
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio unde quae numquam placeat inventore, at debitis id voluptates ad eos nisi assumenda alias dicta saepe recusandae odit. Voluptatum, tempore eligendi.
                    </ReactMarkdown>
                    <hr />
                    <Heading as="h1" size="medium" align="center">Recomendações</Heading>
                    <RecommendedArticles />
                    {!isTablet && (<Container align="end">
                        <GoTopButton />
                    </Container>)}
                </section>
            </div>
        </>
    );
};

export default Post;
