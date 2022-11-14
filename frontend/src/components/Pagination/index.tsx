import *  as S from './styles'
import { ChevronLeft, ChevronRight } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'

export const Pagination = ({ page = 1, count, onChange }: any) => {
    return (
        <S.Container>
            <IconButton background={false}>
                <ChevronLeft size={20} />
            </IconButton>
            <p>Página {page} de {count}</p>
            <IconButton background={false}>
                <ChevronRight size={20} />
            </IconButton>

        </S.Container>
    )
}
