import { Avatar } from 'components/Avatar'
import { Logo } from 'components/Logo'
import * as S from './styles'

export const AuthorProfile = () => {
    return (
        <S.Container>
            <Avatar size='large' />
            <p>Desenvolvedor web</p>
            <Logo size='large' textAlign='start' />
        </S.Container>
    )
}
