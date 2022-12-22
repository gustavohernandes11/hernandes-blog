import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

export const MenuContext = createContext<any>({});

type ContextProps = {
    children: React.ReactNode | React.ReactNode[];
};

export const MenuContextProvider = ({ children }: ContextProps) => {
    const context = useDisclosure();

    return (
        <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
    );
};
