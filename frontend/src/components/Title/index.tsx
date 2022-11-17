import * as S from './styles'

type TitleProps = {
    children: string
}
export const Title = ({ children }: TitleProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}
