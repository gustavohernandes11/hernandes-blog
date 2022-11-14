import * as S from './styles'
import { Menu as MenuIcon, ChevronsUp, Search } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'

export const Menu = () => {
    return (
        <S.Container>
            <IconButton>
                <Search size={20} />
            </IconButton>
            <MenuButton />
            <IconButton>
                <ChevronsUp size={20} />
            </IconButton>
        </S.Container>
    )
}
export const MenuButton = () => {
    return (
        <S.Button>
            <MenuIcon size={20} />
        </S.Button>
    )
}
