import React from "react";
import { LightBulb } from "@styled-icons/heroicons-solid";
import { IconButton } from "@mui/material";

export const ToggleThemeButton = ({ onClick }: any) => {
    return (
        <IconButton onClick={onClick} color="inherit">
            <LightBulb aria-label="toggle-theme-button" width={25} height={25} />
        </IconButton>
    );
};
