import { Button } from "@mui/material";
import Link from "next/link";

export function NavLink({ children, href }: any) {
    return (
        <Link href={href}>
            <Button color="inherit">{children}</Button>
        </Link>
    );
}
