interface initialGlobalStateType {
    activeTheme: string | null | undefined;
    menuCondition: string | null | undefined;
}
export const initialGlobalState: initialGlobalStateType = {
    activeTheme: "light",
    menuCondition: "closed"
};
