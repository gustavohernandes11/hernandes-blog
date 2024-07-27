import { useShowFixedComponents } from "hooks/useShowFixedComponents";
import styled from "styled-components";
import { ILayoutProps } from "../types/ILayoutProps";
import { Header } from "./Header";
import { MenuBar } from "./MenuBar";

export const Main = ({ children }: ILayoutProps) => {
    const { show } = useShowFixedComponents();

    return (
        <StyledContainer className="main">
            <Header visible={show} />
            {children}
            <MenuBar visible={show} />
        </StyledContainer>
    );
};

const StyledContainer = styled.main`
    grid-area: main;
    padding: 1rem;
    max-width: 100vw;
    scroll-behavior: smooth;

    img {
        max-width: 100%;
        height: auto;
    }

    @media (min-width: ${({ theme }) => theme.screen.tablet}) {
        padding: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.screen.desktop}) {
        padding: 8rem;
    }
`;
