import { Home } from "@styled-icons/fa-solid";
import Link from "next/link";
import { IconButton } from "./IconButton";

export const GoHomeButton = () => {
    return (
        <Link href="/">
            <IconButton>
                <Home size={16} />
            </IconButton>
        </Link>
    );
};
