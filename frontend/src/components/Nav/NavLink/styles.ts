import styled, { css } from "styled-components";
import Link from 'next/link'

export const StyledLink = styled(Link)`
${({ }) => css`
        font-size: 1.2rem;
        text-decoration: none;
        color: var(--gray-200);
        font-weight: 300;
        
        :hover {
            cursor: pointer;
        }
    `}
`;
