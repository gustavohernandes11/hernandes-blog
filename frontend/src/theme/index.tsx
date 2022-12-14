import { extendTheme } from "@chakra-ui/react";

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
                color: "custom.light",
                fontSize: "3rem",
                margin: "0 2rem",
            },
            h2: {
                fontSize: "3rem",
                color: "custom.light",
                margin: "0 2rem",
            },
            h3: {
                color: "custom.light",
                fontSize: "1.75rem",
            },
            h4: {
                color: "custom.light",
                fontSize: "1.5rem",
            },
            h5: {
                color: "custom.light",
                fontSize: "1.25rem",
            },
            h6: {
                color: "custom.light",
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
    custom: {
        background: "#121212",
        backgroundSecondary: "#171717",
        backgroundTertiary: "#1A1A1A",
        border: "#424242",
        darkPurple: "#1B1920",
        light: "#FFFFFF",
        grey: "#FFFFFF",
    },
};

export const theme = extendTheme({ colors, components });
