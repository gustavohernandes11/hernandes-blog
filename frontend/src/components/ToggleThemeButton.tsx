import { useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "@styled-icons/feather";
import React from "react";
import { MenuButton } from "./_mobile/MenuBar";

export const ToggleThemeButton = ({ ...props }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <MenuButton
            icon={colorMode == "dark" ? Sun : Moon}
            onClick={toggleColorMode}
            aria-label="Change theme"
            {...props}
        />
    );
};
