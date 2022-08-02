export const buildActions = (dispatch: Function) => {
    type changeThemePayloadType = null | undefined | "light" | "dark";
    type changeOrToggleMenuType = null | undefined | "open" | "closed";

    return {
        changeTheme: (payload: changeThemePayloadType): void => dispatch({ type: "CHANGE_THEME", payload }),
        setOrToggleMenu: (payload: changeOrToggleMenuType): void => dispatch({ type: "CHANGE_MENU", payload })
    }
};
