import { ArrowLeft } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'
import * as S from './styles'

export const GoBackButton = () => {
    return (
        <S.StyledLink href="/">
            <IconButton>
                <ArrowLeft size={20} />
            </IconButton>
        </S.StyledLink>

    )
}
