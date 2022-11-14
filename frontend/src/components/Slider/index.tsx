import * as S from './styles';
import Slider from 'react-slick'
import { IconButton } from 'components/IconButton';
import { ChevronLeft, ChevronRight } from '@styled-icons/feather'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    items: React.ReactNode[]
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
                fade={true}

                speed={500}
                slidesToScroll={1}
                slidesToShow={1}>

                {items.map(e => {
                    return <div className="slide-container">{e}</div>
                })}

            </Slider>
        </S.Container>
    )
}
