import { Github, LinkedinIn } from "@styled-icons/fa-brands";
import styled from "styled-components";
import { IconButton } from "./IconButton";

export const Social = () => {
    return (
        <StyledSocial>
            <a target="_blank" href="https://github.com/gustavohernandes11">
                <IconButton>
                    <Github size={20} />
                </IconButton>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/gustavo-hernandes11/"
            >
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
