import { Moon, Sun } from "@styled-icons/feather";
import React from "react";
import { MenuButton } from "./_mobile/MenuButton";

export const ToggleThemeButton = ({ ...props }) => {
    return (
        <MenuButton
            // icon={colorMode == "dark" ? Sun : Moon}
            // onClick={toggleColorMode}
            aria-label="Change theme"
            {...props}
        />
    );
};
