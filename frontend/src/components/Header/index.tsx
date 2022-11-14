import * as S from './styles'
import { ArrowLeft } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'
import { Avatar } from 'components/Avatar'
import { Logo } from 'components/Logo'
export const Header = () => {
    return (
        <S.Container>
            <Avatar size="small" />
            <span>
                <Logo size='small' textAlign='start' />
                <p>Desenvolvedor web</p>
            </span>
            <IconButton>
                <ArrowLeft size={20} />
            </IconButton>
        </S.Container>
    )
}
