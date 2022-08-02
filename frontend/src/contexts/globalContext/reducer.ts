export const reducer = (
    state: any,
    action: { type: any; payload: any  }
): object => {
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

        case "CHANGE_MENU":
            if (action.payload === "open" || action.payload === "closed") {
                return { ...state, menuCondition: action.payload };
            }
            let newMenuState = state.menuCondition;
            if (state.menuCondition === "open") {
                newMenuState = "closed";
            } else if (state.menuCondition === "closed") {
                newMenuState = "open";
            }
            return { ...state, menuCondition: newMenuState };
        default:
            return { ...state };
    }
};
