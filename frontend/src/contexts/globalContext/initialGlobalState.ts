export interface globalStateType {
    activeTheme: string | null | undefined;
    menuCondition: string | null | undefined;
}
export const initialGlobalState: globalStateType = {
    activeTheme: "light",
    menuCondition: "closed"
};
