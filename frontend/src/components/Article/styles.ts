import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--gray-800);
    padding: 1rem 1rem 1rem 3.2rem;
    border-radius: 6px;
    position: relative;

    p {
        margin: 0;
    }

   a {
       text-decoration: none;
       color: var(--white);
   }

   header {
    margin-bottom: 2rem;
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

    font-size: 0.8rem;
   }

   &:after{
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 1.6rem;
    transform: translateX(-1px);

    background-color: ${({ color }) => color};
   }

   .category {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        left: 1.6rem;
        border-radius: 50%;
        background-color: ${({ color }) => color};
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
`;
