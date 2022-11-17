import styled, { css } from "styled-components";

type ContainerProps = {
    vertical: boolean;
    color: string;
};

export const Container = styled.div`
    ${({ vertical, color }: ContainerProps) => css`
        background-color: var(--gray-800);
        margin-top: ${vertical ? `1.5rem` : `0rem`};
        border-radius: 6px;
        position: relative;
        box-shadow: var(--shadow);
        transition: filter 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

        p {
            margin: 0;
            color: var(--gray-200);
        }

        a {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
            color: var(--white);
            height: 100%;
            padding: ${vertical ? `2rem 1.5rem 1rem` : `1rem 1rem 1rem 3.2rem`};
        }

        header {
            margin-bottom: 2rem;
            p {
                font-size: 0.9rem;
            }

            strong {
                font-size: 1.2rem;
                display: block;
                margin-bottom: 0.5rem;
                text-align: ${vertical ? `center` : ``};
            }
        }
        footer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: var(--gray-200);
            font-size: 0.8rem;
            gap: 0.5rem;

            margin-top: auto;
        }

        &:after {
            content: "";
            position: absolute;
            width: ${vertical ? `100%` : `3px`};
            height: ${vertical ? `0.5rem` : `100%`};
            left: ${vertical ? `0` : `1.6rem`};
            border-radius: ${vertical ? `6px 6px 0px 0px` : `0`};
            top: 0;
            transform: ${vertical ? `` : `translateX(-1px)`};
            background-color: #424242;
        }

        .category {
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: ${vertical ? `0` : `50%`};
            left: ${vertical ? `50%` : `1.6rem`};
            border-radius: 50%;
            background-color: ${color};
            transform: translate(-50%, -50%);
            z-index: 5;
            color: var(--blue-900);

            font-weight: 900;
            font-size: 0.8rem;

            display: flex;
            flex-direction: center;
            align-items: center;
            justify-content: center;
        }

        &:hover {
            cursor: pointer;
            filter: brightness(1.1);
        }
    `}

    @media (max-width: 425px) {
        header {
            p {
                font-size: 0.8rem;
            }

            strong {
                font-size: 1rem;
            }
        }
    }
`;
