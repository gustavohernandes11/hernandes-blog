import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem 0;

 
    .slider {
        display: flex;
        direction: row;
        align-items: center;
        justify-content:center;
        /* width: 100%; */
        /* margin: 0 1rem; */

        .button-control-next, .button-control-prev {
            position: absolute;
            z-index: 3; 
        }

        .button-control-next {
            right: -1rem;
        }
        .button-control-prev {
            left: -1rem;

        }
    }

   
    .slick-dots li button:before {
    color: var(--gray-200);
    }
`;
