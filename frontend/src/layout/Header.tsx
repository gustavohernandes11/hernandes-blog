import { Menu as MenuIcon, X } from "@styled-icons/feather";
import { useMenuContext } from "hooks/useMenuContext";
import { Logo } from "../components/Logo";
import styled from "styled-components";
import { Nav } from "components/Nav";

export const Header = ({ ...props }) => {
    return (
        <Box>
            <Logo />
            <Nav />
        </Box>
    );
};
const Box = styled.header`
    grid-area: header;
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
    padding: 0 calc(22.2% + 1rem);
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3.75rem;
    justify-content: space-between;

    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        padding-inline: 1rem;
        justify-content: center;
        nav {
            display: none;
        }
    } ;
`;
