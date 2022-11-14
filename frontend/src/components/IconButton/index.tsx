import * as S from './styles'

export const IconButton = ({ children, onClick }: any) => {
    return (
        <S.Button onClick={onClick}>
            {children}
        </S.Button>
    )
}
