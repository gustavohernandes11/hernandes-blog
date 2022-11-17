import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem 0 2rem;

    .slider {
        display: flex;
        direction: row;
        align-items: center;
        justify-content: center;

        .slick-list {
            margin: 0 -6rem;
        }

        .slick-slide > div {
            padding: 0 6rem;
            margin: 0 auto;
        }
    }

    .button-control-next,
    .button-control-prev {
        position: absolute;
        z-index: 3;
    }

    .button-control-next {
        right: -1rem;
    }
    .button-control-prev {
        left: -1rem;
    }

    .slick-dots li button:before {
        color: var(--gray-200);
    }
`;
