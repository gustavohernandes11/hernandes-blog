import styled from "styled-components";

export const Container = styled.article`
    .markdown-content {
        p {
            font-size: 1.2rem;
        }
        a {
            text-decoration: none;
            color: var(--purple);
        }
        blockquote {
            margin: 0 1rem;
            padding: 0 1rem;
            border-left: 2px solid var(--purple);
        }
    }
`;
