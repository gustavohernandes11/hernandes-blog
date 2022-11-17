import * as S from './styles'

export type AlignOptions = 'start' | 'center' | 'end'

type ContainerProps = {
    children: React.ReactNode | React.ReactNode[],
    as?: string,
    align?: AlignOptions,
}

export const Container = ({ children, as, align }: ContainerProps) => {
    const props = {
        as: as,
        align: align,
    }
    return (
        <S.Container {...props}>
            {children}
        </S.Container>
    )
}
