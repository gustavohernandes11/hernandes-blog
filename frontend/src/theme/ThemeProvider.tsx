import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { useGlobalContext } from "../hooks/useGlobalContext";

let darkMUITheme = createTheme(darkTheme);
darkMUITheme = responsiveFontSizes(darkMUITheme);
let lightMUITheme = responsiveFontSizes(createTheme(lightTheme));

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
                <CircularProgress className="lading-page-spin" />
            ) : (
                children
            )}
        </ThemeProvider>
    );
}
