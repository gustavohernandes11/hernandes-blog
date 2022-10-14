import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme, color }) => css`
        background-color: ${color ? color : theme.colors.border};
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        gap: 10px;
        display: flex;
        flex-direction: row;

        :hover {
            cursor: pointer;
            transform: scale(1.01);
        }
    `}
`;
