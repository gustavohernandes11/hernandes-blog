import styled, { css } from "styled-components";

export const Aside = () => {
    return <StyledAside></StyledAside>;
};

export const StyledAside = styled.aside`
    ${({ theme }) => css`
        display: flex;    
        position: sticky;
        top: 0;
        left: 0;
        grid-area: aside;
        height: 100%,
        width: 100%;
        background-color: ${theme.color.secondaryBackground};

        @media (max-width: ${theme.screen.tablet}) {
            display: none;
        }
    `}
`;
