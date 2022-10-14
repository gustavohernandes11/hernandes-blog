import React from "react";
import { Moon, Sun } from "@styled-icons/heroicons-solid";
import { IconButton } from "@mui/material";

import { useGlobalContext } from '../../../hooks/useGlobalContext'

export const ToggleThemeButton = ({ onClick }: any) => {
    const [state, actions] = useGlobalContext();

    return (
        <IconButton onClick={onClick} color="inherit">
            {state.activeTheme === "dark"
                ? (<Sun aria-label="toggle-theme-button" width={25} height={25} />)
                : (<Moon aria-label="toggle-theme-button" width={25} height={25} />)}

        </IconButton>
    );
};
