import styled, { css } from "styled-components";

export const Section = ({ children }: any) => {
    return <StyledSection>{children}</StyledSection>;
};

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
    `}
`;
