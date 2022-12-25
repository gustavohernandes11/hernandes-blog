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
    const { onClose } = useMenuContext();

    return (
        <Link href={href} onClick={onClose} passHref {...props}>
            <Text
                fontSize="1rem"
                fontWeight="semibold"
                textDecoration="none"
                _hover={{ cursor: "pointer" }}
                color="textColor"
            >
                {children}
            </Text>
        </Link>
    );
}
