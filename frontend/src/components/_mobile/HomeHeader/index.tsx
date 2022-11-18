import { Logo } from 'components/Logo'
import { SocialBar } from 'components/SocialBar'
import * as S from './styles'

export const HomeHeader = () => {
    return (
        <S.Header>
            <Logo />
            <p>Blog de Desenvolvimento Web</p>
            <SocialBar />
        </S.Header>
    )
}
