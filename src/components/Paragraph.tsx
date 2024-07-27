import styled, { css } from "styled-components";

type ParagraphProps = {
    children: React.ReactNode;
    secondary?: boolean;
};
export const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return <StyledP {...props}>{children}</StyledP>;
};

const StyledP = styled.p<ParagraphProps>`
    ${({ secondary, theme }) => css`
        line-height: 150%;
        color: ${secondary ? theme.color.secondaryText : theme.color.text};
        font-size: 1.2rem;
    `}
`;
