import styled, { css } from "styled-components";

type ContainerProps = {
    vertical: boolean;
    color: string
}

export const Container = styled.div`
${({ vertical, color }: ContainerProps) => css`
        
    background-color: var(--gray-800);
    padding: ${vertical ? `2rem 1.5rem 1rem` : `1rem 1rem 1rem 3.2rem`};
    margin-top: ${vertical ? `1.5rem` : `0rem`};
    border-radius: 6px;
    position: relative;
    box-shadow: var(--shadow);

    p {
        margin: 0;
    }

   a {
       text-decoration: none;
       color: var(--white);
   }

   header {
    margin-bottom: 1rem;
    p {
    font-size: 0.9rem;

    }

   strong {
    font-size: 1rem;
    display: block;
    margin-bottom: 0.5rem;

   }
   
}
   footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: end;
    color: var(--gray-200);

    font-size: 0.8rem;

    p {
        margin: 0;
    }
   }

   &:after{
    content: "";
    position: absolute;
    width:${vertical ? `100%` : `3px`};
    height: ${vertical ? `3px` : `100%`};
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
        top: ${(props: { vertical: boolean }) => props.vertical ? `0` : `50%`};
        left: ${(props: { vertical: boolean }) => props.vertical ? `50%` : `1.6rem`};
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
`;
