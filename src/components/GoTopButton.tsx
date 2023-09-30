import { ArrowUp } from "@styled-icons/fa-solid";
import { IconButton } from "./IconButton";

const goTop = () => {
    if (window !== undefined) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

export const GoTopButton = () => {
    return (
        <IconButton onClick={goTop}>
            <ArrowUp size={16} />
        </IconButton>
    );
};
