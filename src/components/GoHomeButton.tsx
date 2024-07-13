import { Home } from "@styled-icons/fa-solid";
import { useMenuContext } from "hooks/useMenuContext";
import Link from "next/link";
import { IconButton } from "./IconButton";

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
