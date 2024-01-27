import styled, { css } from "styled-components";
import { ILayoutProps } from "../types/ILayoutProps";

export const Section = ({ children }: ILayoutProps) => (
    <StyledSection>{children}</StyledSection>
);

const StyledSection = styled.section`
    ${({ theme }) => css`
        padding: 1rem;
        margin: -1rem;
        margin-bottom: 1rem;
        background-color: ${theme.color.surface};

        @media (min-width: ${theme.screen.tablet}) {
            padding: 4rem;
            margin: -4rem;
            margin-bottom: 4rem;
        }
        @media (min-width: ${theme.screen.desktop}) {
            padding: 8rem;
            margin: -8rem;
            margin-bottom: 8rem;
        }
    `}
`;
