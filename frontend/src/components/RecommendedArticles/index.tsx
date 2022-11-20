import { Article } from 'components/Article'
import { SliderComponent } from 'components/_mobile/Slider'
import { useScreen } from 'hooks/useScreen'
import * as S from './styles'

type RecommendedArticlesProps = {
    items: React.ReactNode[];
}

export const RecommendedArticles = ({ items }: RecommendedArticlesProps) => {
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
