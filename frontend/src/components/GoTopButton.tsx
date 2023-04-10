import { ChevronsUp } from "@styled-icons/feather";
import styled from "styled-components";

export const GoTopButton = () => {
    function backToTop() {
        const content = document.getElementsByClassName("content");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        content[0].scrollTop = 0;
    }

    return (
        <StyledButton
            onClick={backToTop}
            // display={["none", null, null, "flex"]}
            // zIndex="overlay"
            // colorScheme="gray"
            // position="absolute"
            // right="1.5rem"
            // bottom="5rem"
            // aria-label="Go to top!"
            // w="3rem"
            // h="3rem"
        >
            <ChevronsUp size={20} />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    z-index: overlay;
    weight: 3rem;
    bottom: 2rem;
    right: 2rem;
    position: absolute;
    background-color: gray;
`;
