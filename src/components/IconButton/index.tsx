import * as Styled from "./styles";

type IconButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    primary?: boolean;
};

export const IconButton = ({
    children,
    backgroundColor,
    primary,
}: IconButtonProps) => {
    return (
        <Styled.Container backgroundColor={backgroundColor} primary={primary}>
            {children}
        </Styled.Container>
    );
};
