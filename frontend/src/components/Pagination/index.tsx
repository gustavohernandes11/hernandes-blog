import *  as S from './styles'
import { ChevronLeft, ChevronRight } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'

export const Pagination = ({ page, count, onChange }: any) => {
    return (
        <S.Container>
            <IconButton>
                <ChevronLeft size={20} />
            </IconButton>
            <p>Página 1 de 5</p>
            <IconButton>
                <ChevronRight size={20} />
            </IconButton>

        </S.Container>
    )
}
