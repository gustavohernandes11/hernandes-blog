import styled, { css } from "styled-components";
import Image from "next/image";

type StyledImageProps = {
    cape?: boolean | "true" | "false";
};

export const StyledImage = styled(Image)`
    ${({ cape }: StyledImageProps) => css`
        width: ${cape == true ? `100%` : `auto`};
        border-radius: 6px;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    `}
`;

export const Container = styled.div`
    ${({ cape }: StyledImageProps) => css`
        width: ${cape == true ? `100%` : `auto`};
        display: flex;
        justify-content: center;
    `}
`;
