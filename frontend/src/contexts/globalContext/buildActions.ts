export const buildActions = (dispatch: Function) => {
    return {
        changeTheme: (payload: any) => dispatch({ type: "CHANGE_THEME", payload })
    }
};
