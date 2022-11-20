import styled, { css } from "styled-components";

type ContainerProps = {
    color: string;
};

export const Container = styled.div`
    ${({ color }: ContainerProps) => css`
        background-color: var(--gray-800);
        border-radius: 6px;
        box-shadow: var(--shadow);
        transition: filter 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

        .card-content {
            position: relative;
            padding: 1rem;
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
}
        }

        p {
            margin: 0;
            color: var(--gray-200);
        }
        p.category {
                color: ${color};
    
                font-weight: 900;
                font-size: 0.8rem;
                margin-right: auto;
            }

        a {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;
            color: var(--white);
            height: 100%;
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
            }
        }
        footer {
            display: flex;
            flex-direction: row;
            color: var(--gray-200);
            font-size: 0.8rem;
            gap: 0.5rem;
            justify-content: end;
            margin-top: auto;
            
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
