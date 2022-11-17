import { useMenuContext } from 'hooks/useMenuContext';
import { useScreen } from 'hooks/useScreen';
import * as S from './styles'

interface NavLinkType {
    children: React.ReactNode,
    href: string;
}

export function NavLink({ children, href }: NavLinkType): JSX.Element {
    const [, setIsMenuOpen] = useMenuContext();
    const { isTablet } = useScreen()

    const handleClick = () => {
        isTablet && setIsMenuOpen(false);
    }
    return (
        <S.StyledLink onClick={handleClick} href={href}
            color="inherit" >
            {children}
        </S.StyledLink>
    );
}
