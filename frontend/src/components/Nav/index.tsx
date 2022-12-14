import { Menu, MenuItemOption, MenuOptionGroup } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export const Nav = ({ ...props }) => {
    return (
        <Menu {...props}>
            <MenuOptionGroup textColor="#949494" title="Menu">
                <MenuItem value="Início" href="/" />
                <MenuItem value="Sobre" href="/" />
            </MenuOptionGroup>
            <MenuOptionGroup textColor="#949494" title="Categorias">
                <MenuItem value="Backend" href="/" />
                <MenuItem value="Frontend" href="/" />
                <MenuItem value="Design" href="/" />
            </MenuOptionGroup>
        </Menu>
    );
};

const MenuItem = ({ value, href }: any) => {
    return (
        <NavLink href={href}>
            <MenuItemOption
                borderRadius={6}
                _hover={{
                    bgColor: "#9292921f",
                }}
                _focus={{
                    bgColor: "#9292921f",
                }}
                value={value}
            >
                {value}
            </MenuItemOption>
        </NavLink>
    );
};
