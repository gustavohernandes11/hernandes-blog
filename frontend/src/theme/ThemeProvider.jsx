import { ThemeProvider } from "styled-components";
import { theme } from "./defaultTheme";

export function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
