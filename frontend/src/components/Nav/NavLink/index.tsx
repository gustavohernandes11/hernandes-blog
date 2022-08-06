import { Button } from "@mui/material";
import Link from "next/link";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

interface NavLinkType {
    children: React.ReactNode,
    href: string
}

export function NavLink({ children, href }: NavLinkType): JSX.Element {
    const [, actions] = useGlobalContext();
    return (
        <Link href={href}>
            <Button
                onClick={() => actions.setOrToggleMenu("closed")}
                color="inherit"
            >
                {children}
            </Button>
        </Link>
    );
}
