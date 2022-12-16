import { extendTheme, useColorMode } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const components = {
    Button: {
        defaultProps: {
            colorScheme: "darkPurple",
            borderRadius: 0,
            padding: "1rem 3rem",
        },
    },
    fonts: {
        body: "Raleway, sans-serif",
        heading: "Raleway, sans-serif",
        mono: "Raleway, sans-serif",
    },
    styles: {
        global: {
            h1: {
                fontSize: "3rem",
                margin: "0 2rem",
            },
            h2: {
                fontSize: "3rem",
                margin: "0 2rem",
            },
            h3: {
                fontSize: "1.75rem",
            },
            h4: {
                fontSize: "1.5rem",
            },
            h5: {
                fontSize: "1.25rem",
            },
            h6: {
                fontSize: "1rem",
            },
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
    },
};
const colors = {
    darkPurple: {
        100: "#634f83",
        200: "#564572",
        300: "#45375b",
        400: "#3b2f4e",
        500: "#342945",
        600: "#322743",
        700: "#2b223a",
        800: "#2b223a",
        900: "#251d31",
    },
    darkGray: {
        100: "#3d3d3d",
        200: "#3b3b3b",
        300: "#3a3a3a",
        400: "#313131",
        500: "#2b2b2b",
        600: "#202020",
        700: "#2b2b2b",
        800: "#202020",
        900: "#1f1f1f",
    },
    black: {
        100: "#292929",
        200: "#242424",
        300: "#242424",
        400: "#1b1b1b",
        500: "#131313",
        600: "#0f0f0f",
        700: "#0f0f0f",
        800: "#0e0e0e",
        900: "#101010",
    },
    custom: {
        background: "#121212",
        backgroundSecondary: "#171717",
        backgroundTertiary: "#1A1A1A",
        border: "#6d6d6d",
        darkPurple: "#1B1920",
        light: "#FFFFFF",
        dark: "#121212",
        gray: "#f5f5f5",
    },
};

export const theme = extendTheme({ colors, components, config });
