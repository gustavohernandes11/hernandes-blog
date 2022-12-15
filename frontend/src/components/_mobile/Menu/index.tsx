import * as S from "./styles";
import {
    ChevronUp,
    Home,
    Menu as MenuIcon,
    Sun,
    ChevronsUp,
    X,
} from "@styled-icons/feather";
import Link from "next/link";
import { useMenuContext } from "hooks/useMenuContext";
import { Flex, Icon, IconButton } from "@chakra-ui/react";

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useMenuContext();
    return (
        <Flex
            height="60px"
            width="100vw"
            justify="space-evenly"
            align="center"
            position="fixed"
            bottom={0}
            right={0}
            backgroundColor="custom.backgroundSecondary"
        >
            <IconButton
                color="#d9d9d9"
                fontSize={20}
                variant="ghost"
                as={Link}
                href={"/"}
                aria-label={"Change theme"}
            >
                <Icon strokeWidth={2} as={Sun} />
            </IconButton>
            <IconButton
                color="#d9d9d9"
                fontSize={20}
                colorScheme="gray"
                bgColor="#272727"
                as={Link}
                href={"/"}
                aria-label={"Go home"}
            >
                <Icon strokeWidth={2} as={Home} />
            </IconButton>
            <IconButton
                color="#d9d9d9"
                fontSize={20}
                variant="ghost"
                as={Link}
                href={"/"}
                aria-label={"Go top"}
            >
                <Icon strokeWidth={2} as={ChevronsUp} />
            </IconButton>
        </Flex>
    );
};
