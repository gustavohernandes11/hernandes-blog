import { ArrowUp } from "@styled-icons/fa-solid";
import { IconButton } from "./IconButton";

const goTop = () => {
    const content = document.getElementsByClassName("content");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    content[0].scrollTop = 0;
};

export const GoTopButton = () => {
    return (
        <IconButton onClick={goTop}>
            <ArrowUp size={16} />
        </IconButton>
    );
};
