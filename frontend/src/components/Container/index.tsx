import * as S from './styles'

export type AlignOptions = 'start' | 'center' | 'end'
export type JustifyOptions = 'space-between' | 'center' | 'space-around' | 'space-evenly'

type ContainerProps = {
    children?: any,
    as?: string,
    align?: AlignOptions,
    justify?: JustifyOptions,
}

export const Container = ({ children, as, align, justify }: any) => {
    const props = {
        as: as,
        align: align,
        justify: justify,
    }
    return (
        <S.Container {...props}>
            <>
                {children}
            </>
        </S.Container>
    )
}
