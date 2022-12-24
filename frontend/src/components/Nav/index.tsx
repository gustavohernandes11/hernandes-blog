import {
    Container,
    Flex,
    Menu,
    MenuItemOption,
    MenuOptionGroup,
} from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export const Nav = ({ ...props }) => {
    return (
        <Flex
            as="nav"
            flexDirection="column"
            gap="0.75rem"
            align="center"
            justify="center"
            {...props}
        >
            {/* <MenuOptionGroup textColor="textColorSecondary" title="Menu"> */}

            <NavLink href="/">Início</NavLink>
            <NavLink href="/about">Sobre</NavLink>
            {/* </MenuOptionGroup> */}
            {/* <MenuOptionGroup
                    textColor="textColorSecondary"
                    title="Categorias"
                >
                    <MenuItem value="Backend" href="/" />
                    <MenuItem value="Frontend" href="/" />
                    <MenuItem value="Design" href="/" />
                </MenuOptionGroup> */}
        </Flex>
    );
};

const MenuItem = ({ value, href }: any) => {
    return (
        <NavLink href={href}>
            <MenuItemOption
                fontWeight={500}
                fontSize="1.2rem"
                borderRadius={6}
                textColor="textColor"
                value={value}
            >
                {value}
            </MenuItemOption>
        </NavLink>
    );
};
