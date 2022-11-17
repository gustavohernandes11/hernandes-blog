import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
    ${({ as, size, align }: any) => css`
        font-size: ${as === 'h1' && '2rem'};
        font-size: ${as === 'h2' && '1.3rem'};
        font-size: ${as === 'h3' && '1rem'};

        font-size: ${size === 'small' && '1rem'};
        font-size: ${size === 'medium' && '1.3rem'};
        font-size: ${size === 'big' && '2rem'};
        font-weight: 900;
        text-align: ${align};

        
    `}
`;
