import * as Styled from "./styles";

type IconButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    primary?: boolean;
    href?: string;
    disable?: boolean;
    onClick?: () => void;
};

export const IconButton = ({
    children,
    backgroundColor,
    primary,
    onClick,
    disable,
}: IconButtonProps) => {
    return (
        <Styled.Container
            onClick={onClick}
            backgroundColor={backgroundColor}
            primary={primary}
            disable={disable}
        >
            {children}
        </Styled.Container>
    );
};
