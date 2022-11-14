import styled from "styled-components";
import { SizeOptions } from './index'

export const Frame = styled.div`
    padding: 3px;
    background: var(--gradient-vertical);
    flex-grow: 0;
    
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;

    img {
        border-radius: 50%;
        height: ${(props: { size: SizeOptions }) => props.size === 'large' ? `95px` : `35px`};
        width: ${(props: { size: SizeOptions }) => props.size === 'large' ? `95px` : `35px`};

        
    }
`
