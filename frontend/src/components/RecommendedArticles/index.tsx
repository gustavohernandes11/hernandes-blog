import { Article } from 'components/Article'
import { SliderComponent } from 'components/_mobile/Slider'
import { useScreen } from 'hooks/useScreen'
import { ArticleData } from 'services/articles'
import * as S from './styles'

type RecommendedArticlesProps = {
    items: ArticleData[];
}

export const RecommendedArticles = ({ items }: RecommendedArticlesProps) => {
    const { isTablet } = useScreen()
    return (
        <S.Container>
            {isTablet
                ? <SliderComponent items={items} />
                : <S.Grid className="recommended-grid">
                    {items.map((e: any) => {
                        return <Article
                            imageSrc={e.hero.url}
                            imageHeight={e.hero.height}
                            imageWidth={e.hero.width}
                            imageAlt={e.hero.alternativeText}
                            slug={e.slug}
                            categoryInitial={e.acronym}
                            title={e.title}
                            color={e.color}
                            date={e.publishedAt}
                            excerpt={e.excerpt}
                            key={e.slug}

                        />
                    })}
                </S.Grid>
            }
        </S.Container>
    )
}
