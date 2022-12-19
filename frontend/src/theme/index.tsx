import { extendTheme } from "@chakra-ui/react";

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
        900: "#1b1524",
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
        darkPurple: "#1B1920",
        light: "#FFFFFF",
        dark: "#121212",
    },
};

const semanticTokens = {
    colors: {
        background: {
            _dark: "#121212",
            _light: "#fff",
        },
        backgroundSecondary: {
            _dark: "#171717",
            _light: "#f8f8f8",
        },
        backgroundTertiary: {
            _dark: "#1A1A1A",
            _light: "#f5f5f5",
        },
        textColor: {
            _dark: "#f5f5f5",
            _light: "#121212",
        },
        textColorSecondary: {
            _dark: "#e4e4e4",
            _light: "#242424",
        },
        purple: {
            _dark: "purple.300",
            _light: "purple.700",
        },
        borderColor: {
            _dark: "#6d6d6d",
            _light: "#c0c0c0",
        },
    },
};
export const theme = extendTheme({
    colors,
    semanticTokens,
    components,
    config,
});
