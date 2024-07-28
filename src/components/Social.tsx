import { Github, Linkedin } from "@styled-icons/fa-brands";
import styled, { css } from "styled-components";
import { IconButton } from "./IconButton";

export const Social = () => {
    return (
        <StyledSocial>
            <a target="_blank" href="https://github.com/gustavohernandes11">
                <IconButton secondary>
                    <Github size={26} />
                </IconButton>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/gustavo-hernandes11/"
            >
                <IconButton secondary>
                    <Linkedin size={26} />
                </IconButton>
            </a>
        </StyledSocial>
    );
};

export const StyledSocial = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: start;

        @media (max-width: ${theme.screen.tablet}) {
            // align first icon button disregarding its padding
            margin-left: -0.5rem;
        }
    `}
`;
