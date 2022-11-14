import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
    ${({ as, size }: any) => css`
        font-size: ${as === 'h1' && '1.6rem'};
        font-size: ${as === 'h2' && '1.3rem'};
        font-size: ${as === 'h3' && '1rem'};

        font-size: ${size === 'small' && '1rem'};
        font-size: ${size === 'medium' && '1.3rem'};
        font-size: ${size === 'big' && '1.6rem'};
        font-weight: 900;

        
    `}
`;
