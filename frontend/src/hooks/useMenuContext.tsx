import { MenuContext } from "contexts/MenuContextProvider"
import { useContext } from "react"

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("O hook useMenuContext deve ser utilizado apenas dentro de um contexto!")
    }

    return useContext(MenuContext);
}
