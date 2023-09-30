import { Copyright } from "components/Copyright";
import { Social } from "components/Social";
import styled from "styled-components";

export const DrawerFooter = () => {
    return (
        <StyledDrawerFooter>
            <Social />
            <Copyright />
        </StyledDrawerFooter>
    );
};

export const StyledDrawerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: drawer-footer;
`;
