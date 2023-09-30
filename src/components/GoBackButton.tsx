import { ArrowLeft } from "@styled-icons/fa-solid";
import { useRouter } from "next/router";
import { IconButton } from "./IconButton";

export const GoBackButton = () => {
    const router = useRouter();

    return router.pathname !== "/" ? (
        <IconButton onClick={router.back}>
            <ArrowLeft size={16} />
        </IconButton>
    ) : (
        <IconButton disable>{null}</IconButton>
    );
};
