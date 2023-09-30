import * as Styled from "./styles";

type IconButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    primary?: boolean;
    href?: string;
    onClick?: () => void;
};

export const IconButton = ({
    children,
    backgroundColor,
    primary,
    onClick,
}: IconButtonProps) => {
    return (
        <Styled.Container
            onClick={onClick}
            backgroundColor={backgroundColor}
            primary={primary}
        >
            {children}
        </Styled.Container>
    );
};
