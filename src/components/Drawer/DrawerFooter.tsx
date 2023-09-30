import { Social } from "components/Social";
import styled, { css } from "styled-components";

export const DrawerFooter = () => {
    return (
        <StyledDrawerFooter>
            <Social />
            <p>© 2023, made with Next.js</p>
        </StyledDrawerFooter>
    );
};

export const StyledDrawerFooter = styled.footer`
    ${() => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-area: drawer-footer;
    `}
`;
