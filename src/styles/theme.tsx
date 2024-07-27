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
        background: "#f1f1f1",
        secondaryBackground: "#E8E8E8",
        surface: "#F8F8F8",
        secondarySurface: "#F3F3F3",
        text: "#222222",
        primary: "#7652C2",
        secondary: "#361C9C",
        border: "#D3D3D3",
    },
    ...commonTheme,
};
export const darkTheme = {
    color: {
        background: "#181818",
        secondaryBackground: "#252525",
        surface: "#313131",
        secondarySurface: "#1D1D1D",
        text: "#f9f9f9",
        primary: "#523CAB",
        secondary: "#E300F6",
        border: "#313131",
    },
    ...commonTheme,
};

export type ITheme = typeof lightTheme;
