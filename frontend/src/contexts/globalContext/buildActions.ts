export const buildActions = (dispatch: Function) => {
    type changeThemePayloadType = null | undefined | "light" | "dark";

    return {
        changeTheme: (payload: changeThemePayloadType): void => dispatch({ type: "CHANGE_THEME", payload })
    }
};
