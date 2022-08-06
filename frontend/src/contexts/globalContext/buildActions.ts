export const buildActions = (dispatch: Function) => {
    type changeThemePayloadType = null | undefined | "light" | "dark";
    type setOrToggleMenuType = null | undefined | "open" | "closed";

    return {
        changeTheme: (payload: changeThemePayloadType): void => dispatch({ type: "CHANGE_THEME", payload }),
        setOrToggleMenu: (payload: setOrToggleMenuType): void => dispatch({ type: "CHANGE_MENU", payload })
    }
};
