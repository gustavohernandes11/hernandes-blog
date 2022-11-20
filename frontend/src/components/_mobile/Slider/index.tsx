import * as S from './styles';
import Slider from 'react-slick'
import { IconButton } from 'components/IconButton';
import { ChevronLeft, ChevronRight } from '@styled-icons/feather'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Article } from 'components/Article';
import { ArticleData } from 'services/articles';

export const NextButton = ({ onClick }: any) => {
    return <IconButton
        className="button-control-next"
        background={"#2f2f2f"}
        onClick={onClick}><ChevronRight size={20} /></IconButton>
}

export const PrevButton = ({ onClick }: any) => {
    return <IconButton
        className="button-control-prev"
        background={"#2f2f2f"}
        onClick={onClick}><ChevronLeft size={20} /></IconButton>
}

type SliderProps = {
    items: ArticleData[]
}
export const SliderComponent = ({ items }: SliderProps) => {
    return (
        <S.Container>
            <Slider
                className='slider'
                dots={true}
                prevArrow={<PrevButton />}
                nextArrow={<NextButton />}
                pauseOnHover={true}
                infinite={true}
                centerMode={true}
                speed={500}
                slidesToScroll={1}
                slidesToShow={1}
            >

                {items.map(e => {
                    return <Article
                        imageSrc={e.hero?.url}
                        imageHeight={e.hero?.height}
                        imageWidth={e.hero?.width}
                        imageAlt={e.hero?.alternativeText}
                        slug={e.slug}
                        category={e.category.name}
                        title={e.title}
                        color={e.category.color}
                        date={e.publishedAt}
                        excerpt={e.excerpt}
                        key={e.slug}
                    />
                })}

            </Slider>
        </S.Container>
    )
}
