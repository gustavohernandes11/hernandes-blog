import * as S from './styles'
import { X } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'
import { AuthorProfile } from 'components/AuthorProfile'
import { Nav } from 'components/Nav'
import { SocialBar } from 'components/SocialBar'
import { useMenuContext } from 'hooks/useMenuContext'

export const MenuModal = () => {
    const [isMenuOpen, setIsMenuOpen] = useMenuContext();

    return (
        <>
            {isMenuOpen && (
                <S.Container>
                    <div className="wrapper">
                        <IconButton onClick={() => setIsMenuOpen(false)} background={false} className="close-button">
                            <X size={20} />
                        </IconButton>
                        <AuthorProfile />
                        <Nav />
                        <SocialBar />
                    </div>
                </S.Container>
            )}
        </>
    )
}
