import { Logo } from 'components/Logo'
import { SocialBar } from 'components/SocialBar'
import * as S from './styles'

export const Header = () => {
    return (
        <S.Header>
            <Logo size="medium" />
            <p>Blog de Desenvolvimento Web</p>
            <SocialBar />
        </S.Header>
    )
}
