import React, { useContext } from "react";
import { IconButton } from "./IconButton";
import { Moon, Sun } from "@styled-icons/fa-solid";
import { ThemeContext } from "contexts/ThemeContext";

export const ThemeButton = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const getThemeIcon = () =>
        theme === "dark" ? <Sun size={16} /> : <Moon size={16} />;

    return <IconButton onClick={toggleTheme}>{getThemeIcon()}</IconButton>;
};
