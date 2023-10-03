import { ArrowUp } from "@styled-icons/fa-solid";
import { IconButton } from "./IconButton";

const goTop = () => {
    const main = document.getElementsByClassName("main");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    main[0].scrollTop = 0;
};

export const GoTopButton = () => {
    return (
        <IconButton onClick={goTop}>
            <ArrowUp size={16} />
        </IconButton>
    );
};
