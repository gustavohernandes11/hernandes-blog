import { Search } from '@styled-icons/feather'
import { AuthorProfile } from 'components/AuthorProfile'
import { IconButton } from 'components/IconButton'
import { Nav } from 'components/Nav'
import { SocialBar } from 'components/SocialBar'
import * as S from './styles'

export const Aside = () => {
    return (
        <S.Container className="aside">
            <AuthorProfile />
            <Nav />

            <SocialBar />
        </S.Container>
    )
}
