import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { useGlobalContext } from "../hooks/useGlobalContext";

const darkMUITheme = createTheme(darkTheme);
const lightMUITheme = createTheme(lightTheme);

export function Theme({ children }: any): JSX.Element {
    const [state, actions] = useGlobalContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(() => true);
        const storagedTheme = localStorage.getItem("storagedTheme");

        if (storagedTheme === null || undefined) {
            localStorage.setItem("storagedTheme", "dark");
            actions.changeTheme("dark");
        } else {
            actions.changeTheme(storagedTheme);
        }
        setLoading(() => false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getTheme() {
         return state.activeTheme === "dark"
            ? darkMUITheme
            : lightMUITheme;
    }
    return (
        <ThemeProvider theme={getTheme}>
            {loading ? <CircularProgress className="lading-page-spin" /> : children}
        </ThemeProvider>
    );
}
