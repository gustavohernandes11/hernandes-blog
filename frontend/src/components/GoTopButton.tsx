import { ArrowUp } from "@styled-icons/feather";
import styled from "styled-components";
import { mixin } from "styles/mixins";

export const GoTopButton = () => {
    function backToTop() {
        const content = document.getElementsByClassName("content");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        content[0].scrollTop = 0;
    }
    return (
        <StyledButton onClick={backToTop}>
            <ArrowUp size={20} />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    z-index: overlay;

    ${mixin.buttonStyle};
    ${mixin.flexCenter};

    top: calc(90vh - 3rem);
    right: 1rem;
    position: absolute;
`;
