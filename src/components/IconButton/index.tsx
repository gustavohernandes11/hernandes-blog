import * as Styled from "./styles";

type IIconButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    primary?: boolean;
    secondary?: boolean;
    href?: string;
    disable?: boolean;
    onClick?: () => void;
};

export const IconButton = ({
    children,
    backgroundColor,
    primary,
    secondary,
    onClick,
    disable,
}: IIconButtonProps) => {
    return (
        <Styled.Container
            onClick={onClick}
            backgroundColor={backgroundColor}
            primary={primary}
            secondary={secondary}
            disable={disable}
        >
            {children}
        </Styled.Container>
    );
};
