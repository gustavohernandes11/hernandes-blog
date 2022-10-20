import styled, { css } from "styled-components";

interface CardInterface {
    theme: any;
}
interface FooterInterface {
    theme: any;
    categoryColor?: string;
}

export const Card = styled.div`
    ${({ theme }: CardInterface) => css`
        background-color: ${theme.colors.surface};
        display: flex;
        width: -webkit-fill-available;
        border-radius: 5px;
        flex-direction: column;
        overflow: hidden;
            align-self: flex-start;

        
        :hover {
            img {
                transition: all 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
                transform: translateZ(0);
                backface-visibility: hidden;
                transform: scale(1.04);
            }
            box-shadow: 0px 5px 5px rgba(0, 0, 0, , 0.3);
            cursor: pointer;
        }
    `}
`;
interface ModalHeaderInterface {
    theme: any;
}
export const ModalHeader = styled.div`
    ${({ theme }: ModalHeaderInterface) => css`
        height: 100%;
    `}
`;
export const Footer = styled.footer`
    ${({ theme, categoryColor }: FooterInterface) => css`
        color: ${theme.colors.text};
        padding-top: ${theme.spacings[2]};
        display: flex;
        align-items: center;
        justify-content: space-between;

        time {
            color: ${theme.colors.textSecondary};
            font-size: ${theme.fontSizes.xs};
        }
        .category {
            color: ${categoryColor
            ? categoryColor
            : theme.colors.primaryVariant};
        }
        p {
            margin: 0;
        }
    `}
`;

export const Content = styled.div`
        margin: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`;

export const ImageWrapper = styled.div`
    height: 180px;
    display: grid;

`
