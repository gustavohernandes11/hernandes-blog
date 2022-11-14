import styled, { css } from "styled-components";
import Image from "next/image";

type StyledImageProps = {
    cape?: boolean;
}

export const StyledImage = styled(Image)`
    ${({ cape }: StyledImageProps) => css`
    width: ${cape ? `100%` : 'auto'};
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    `}
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
