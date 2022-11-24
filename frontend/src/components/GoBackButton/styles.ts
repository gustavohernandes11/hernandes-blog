import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
    @media (max-width: 769px) {
        display: none;
    }
`;
