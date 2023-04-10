import { Text } from "@chakra-ui/react";
import { useMenuContext } from "hooks/useMenuContext";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface NavLinkType {
    children: React.ReactNode;
    href: string;
    active?: Boolean;
}

export function NavLink({
    children,
    href,
    active,
    ...props
}: NavLinkType): JSX.Element {
    const { onClose } = useMenuContext();
    const router = useRouter();

    return (
        <Link href={href} onClick={onClose} passHref {...props}>
            <Wrapper className={href === router.asPath ? "activeLink" : ""}>
                {children}
            </Wrapper>
        </Link>
    );
}

const Wrapper = styled.a`
    font-size: 1rem;
    padding: 0.3rem;
    font-weight: semibold;
    text-decoration: none;
    position: relative;

    &.activeLink {
        &::after {
            transform: translateX(-50%);
            position: absolute;
            z-index: 100;
            content: "";
            background-color: #ba49ff;
            border-radius: 50%;
            bottom: -0.3rem;
            left: 50%;
            height: 4px;
            width: 4px;
        }
    }

    :hover {
        cursor: pointer;
        color: #ba49ff;
    }
`;
