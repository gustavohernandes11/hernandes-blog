import { Bars, X } from "@styled-icons/fa-solid";
import { useMenuContext } from "hooks/useMenuContext";
import { IconButton } from "./IconButton";

export const MenuButton = () => {
    const { isOpen, toggleMenu } = useMenuContext();
    const getMenuIcon = () => (isOpen ? <X size={16} /> : <Bars size={16} />);
    return (
        <IconButton onClick={toggleMenu} primary>
            {getMenuIcon()}
        </IconButton>
    );
};
