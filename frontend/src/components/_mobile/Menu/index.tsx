import * as S from './styles'
import { Menu as MenuIcon, Search, X } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'
import { GoTopButton } from 'components/GoTopButton'
import Link from 'next/link'
import { useMenuContext } from 'hooks/useMenuContext'

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useMenuContext()
    return (
        <S.Container>
            <IconButton as={Link} href={'/search'}>
                <Search size={20} />
            </IconButton>
            <MenuButton isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <GoTopButton />
        </S.Container>
    )
}
export const MenuButton = ({ onClick, isMenuOpen }: any) => {
    return (
        <S.Button onClick={onClick}>
            {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </S.Button>
    )
}
