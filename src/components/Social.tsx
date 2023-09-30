import { Github, LinkedinIn } from "@styled-icons/fa-brands";
import styled, { css } from "styled-components";
import { IconButton } from "./IconButton";

export const Social = () => {
    return (
        <StyledSocial>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Next.js">
                <IconButton>
                    <Github size={20} />
                </IconButton>
            </a>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Next.js">
                <IconButton>
                    <LinkedinIn size={20} />
                </IconButton>
            </a>
        </StyledSocial>
    );
};

export const StyledSocial = styled.div`
    display: flex;
    flex-direction: row;
`;
