import {
    Container,
    Menu,
    MenuItemOption,
    MenuOptionGroup,
    useColorMode,
} from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export const Nav = ({ ...props }) => {
    const { colorMode } = useColorMode();

    return (
        <Container as="nav">
            <Menu {...props} isLazy size="lg">
                <MenuOptionGroup
                    textColor={
                        colorMode === "dark" ? "#949494" : "custom.darkPurple"
                    }
                    title="Menu"
                >
                    <MenuItem value="Início" href="/" />
                    <MenuItem value="Sobre" href="/about" />
                </MenuOptionGroup>
                <MenuOptionGroup
                    textColor={
                        colorMode === "dark" ? "#949494" : "custom.darkPurple"
                    }
                    title="Categorias"
                >
                    <MenuItem value="Backend" href="/" />
                    <MenuItem value="Frontend" href="/" />
                    <MenuItem value="Design" href="/" />
                </MenuOptionGroup>
            </Menu>
        </Container>
    );
};

const MenuItem = ({ value, href }: any) => {
    const { colorMode } = useColorMode();

    return (
        <NavLink href={href}>
            <MenuItemOption
                fontWeight={500}
                fontSize="1.2rem"
                borderRadius={6}
                _hover={{
                    bgColor: colorMode === "dark" ? "#353535" : "#d8d8d8",
                }}
                textColor={colorMode === "dark" ? "#b4b4b4" : "#000"}
                _focus={{
                    bgColor: colorMode === "dark" ? "#353535" : "#d8d8d8",
                }}
                value={value}
            >
                {value}
            </MenuItemOption>
        </NavLink>
    );
};
