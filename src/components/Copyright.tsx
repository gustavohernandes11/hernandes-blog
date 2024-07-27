import styled from "styled-components";

export const Copyright = () => {
    return <StyledP>© 2023, criado com Next.js e PayloadCMS</StyledP>;
};

const StyledP = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.color.secondaryText};
`;
