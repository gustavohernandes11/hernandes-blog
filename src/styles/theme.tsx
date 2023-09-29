const commonTheme = {
    font: {
        primaryFamily: "'Ubuntu', sans-serif",
        secondaryFamily: "'DM Sans', sans-serif",
    },
    screen: {
        mobile: "40rem",
        tablet: "48rem",
        laptop: "64rem",
        desktop: "80rem",
    },
};
export const lightTheme = {
    color: {
        background: "#FFFFFF",
        secondaryBackground: "#E8E8E8",
        surface: "#F8F8F8",
        text: "#000000",
        primary: "#7652C2",
        secondary: "#361C9C",
    },
    ...commonTheme,
};
export const darkTheme = {
    color: {
        background: "#141414",
        secondaryBackground: "#252525",
        surface: "#313131",
        text: "#FFFFFF",
        primary: "#523CAB",
        secondary: "#E300F6",
    },
    ...commonTheme,
};

export type ITheme = typeof lightTheme;
