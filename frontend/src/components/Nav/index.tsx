import {
    Container,
    Menu,
    MenuItemOption,
    MenuOptionGroup,
} from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export const Nav = ({ ...props }) => {
    return (
        <Container as="nav">
            <Menu {...props} size="lg">
                <MenuOptionGroup textColor="textColorSecondary" title="Menu">
                    <MenuItem value="Início" href="/" />
                    <MenuItem value="Sobre" href="/about" />
                </MenuOptionGroup>
                {/* <MenuOptionGroup
                    textColor="textColorSecondary"
                    title="Categorias"
                >
                    <MenuItem value="Backend" href="/" />
                    <MenuItem value="Frontend" href="/" />
                    <MenuItem value="Design" href="/" />
                </MenuOptionGroup> */}
            </Menu>
        </Container>
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
