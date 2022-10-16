import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from '@mui/utils'

import { lightPallete } from "./lightPallete";
import { darkPallete } from "./darkPallete";
import { sharedThemeProps } from "./sharedThemeProps";
import { useGlobalContext } from "../hooks/useGlobalContext";

export let darkMUITheme = responsiveFontSizes(
    createTheme(deepmerge(darkPallete, sharedThemeProps))
);
export let lightMUITheme = responsiveFontSizes(
    createTheme(deepmerge(lightPallete, sharedThemeProps))
);

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
        return state.activeTheme === "dark" ? darkMUITheme : lightMUITheme;
    }
    return (
        <ThemeProvider theme={getTheme}>
            {loading ? (
                <Container sx={{ display: "flex", position: "absolute", width: '100%', height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress className="loading-page-spin" />
                </Container>
            ) : (
                children
            )}
        </ThemeProvider>
    );
}
