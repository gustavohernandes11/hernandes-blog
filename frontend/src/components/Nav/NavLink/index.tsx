import { Text } from "@chakra-ui/react";
import { useMenuContext } from "hooks/useMenuContext";
import Link from "next/link";

interface NavLinkType {
    children: React.ReactNode;
    href: string;
}

export function NavLink({
    children,
    href,
    ...props
}: NavLinkType): JSX.Element {
    const [, setIsMenuOpen] = useMenuContext();

    const handleClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <Link href={href} onClick={handleClick} passHref {...props}>
            <Text
                fontSize="1rem"
                fontWeight="semibold"
                textDecoration="none"
                _hover={{ cursor: "pointer" }}
                color="white"
            >
                {children}
            </Text>
        </Link>
    );
}
