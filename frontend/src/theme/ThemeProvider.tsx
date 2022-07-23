import { ThemeProvider } from "styled-components";
import { theme as defaultTheme } from "./defaultTheme";
import { createTheme } from "@mui/material";

const theme = createTheme(defaultTheme);
console.log(theme)

export function Theme({ children }: any): JSX.Element {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
