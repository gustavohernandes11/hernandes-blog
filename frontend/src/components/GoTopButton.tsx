import { IconButton } from "@chakra-ui/react";
import { ChevronsUp } from "@styled-icons/feather";

export const GoTopButton = () => {
    function backToTop() {
        const content = document.getElementsByClassName("content");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        content[0].scrollTop = 0;
    }

    return (
        <IconButton
            display={["none", null, null, "flex"]}
            zIndex="overlay"
            colorScheme="gray"
            position="absolute"
            right="1.5rem"
            bottom="5rem"
            aria-label="Go to top!"
            w="3rem"
            h="3rem"
            onClick={backToTop}
        >
            <ChevronsUp size={20} />
        </IconButton>
    );
};
