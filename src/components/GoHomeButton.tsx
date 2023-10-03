import { Home } from "@styled-icons/fa-solid";
import Link from "next/link";
import { IconButton } from "./IconButton";
import { useMenuContext } from "hooks/useMenuContext";

export const GoHomeButton = () => {
    const { setMenuOpen } = useMenuContext();
    return (
        <Link href="/">
            <IconButton onClick={() => setMenuOpen(false)}>
                <Home size={16} />
            </IconButton>
        </Link>
    );
};
