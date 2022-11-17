import { Article } from 'components/Article'
import { ArticleList } from 'components/ArticleList'
import { SliderComponent } from 'components/_mobile/Slider'
import { useScreen } from 'hooks/useScreen'
import * as S from './styles'

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

export const RecommendedArticles = () => {
    const { isTablet } = useScreen()
    return (
        <S.Container>
            {isTablet
                ? <SliderComponent items={items} />
                : <S.Grid className="recommended-grid">
                    {items}
                </S.Grid>
            }



        </S.Container>
    )
}
