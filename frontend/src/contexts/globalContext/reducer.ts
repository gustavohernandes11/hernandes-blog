export const reducer = (state: any, action: { type: any; payload: string | undefined | null }): object => {
    switch (action.type) {
        case "CHANGE_THEME":
            if (action.payload === "dark" || action.payload === "light") {
                return { ...state, activeTheme: action.payload };
            }
            let newTheme = state.activeTheme;
            if (state.activeTheme === "light") {
                localStorage.setItem("storagedTheme", "dark");
                newTheme = "dark";
            } else if (state.activeTheme === "dark") {
                localStorage.setItem("storagedTheme", "light");
                newTheme = "light";
            }
            return { ...state, activeTheme: newTheme };

        default:
            return { ...state };
    }
};
