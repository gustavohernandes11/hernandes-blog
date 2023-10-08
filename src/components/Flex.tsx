import styled, { ThemeProps, ThemedStyledProps } from "styled-components";
import { css } from "styled-components";

type FlexOptions = {
    children: any;
    justify?: "end" | "start" | "center" | "space-between" | "space-around";
    align?: "start" | "center" | "end";
};

export const Flex = ({ children, ...props }: FlexOptions) => {
    return <StyledContainer {...props}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    ${({ justify, align }: FlexOptions) => css`
        display: flex;
        justify-content: ${justify ?? "unset"};
        align-items: ${align ?? "unset"};
    `}
`;
