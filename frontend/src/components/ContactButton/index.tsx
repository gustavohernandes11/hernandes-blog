import * as Styled from "./styles";

type ContactButton = {
    children: any;
    color: string;
    linkTo: string;
}

export const ContactButton = ({ children, color, linkTo }: ContactButton) => {
    return (
        <>
            {linkTo ? (
                <a href={linkTo} target="_blank">
                    <Styled.Container color={color}>
                        {children}
                    </Styled.Container>
                </a>
            ) : (
                <Styled.Container color={color}>{children}</Styled.Container>
            )}
        </>
    );
};
