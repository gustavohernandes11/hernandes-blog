import * as S from './styles'
import { ArrowLeft } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'
import { Logo } from 'components/Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'

type HeaderProps = {
    goBackButton?: boolean,
}

export const Header = ({ goBackButton = true }: HeaderProps) => {
    const router = useRouter()
    return (
        <S.Container>
            <span>
                <Logo height={25} />
                <p>Blog de Desenvolvimento Web</p>
            </span>
            {goBackButton &&
                <Link href="/" replace title="go back">
                    <IconButton>
                        <ArrowLeft size={20} />
                    </IconButton>
                </Link>
            }
        </S.Container>
    )
}
