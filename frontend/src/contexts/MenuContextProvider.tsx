import { createContext, useState } from "react";

export const MenuContext = createContext<[any, any]>([{}, {}]);

type ContextProps = {
    children: React.ReactNode | React.ReactNode[]
}

export const MenuContextProvider = ({ children }: ContextProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MenuContext.Provider value={[isOpen, setIsOpen]}>
            {children}
        </MenuContext.Provider>
    )
}

