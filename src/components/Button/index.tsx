import { IconButton } from "components/IconButton";
import * as Styled from "./styles";
type ButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    onClick?: () => void;
    icon?: React.ReactElement;
    iconPosition?: "left" | "right";
};

export const Button = ({
    children,
    backgroundColor,
    onClick,
    icon,
    iconPosition = "right",
}: ButtonProps) => {
    return (
        <Styled.Button
            backgroundColor={backgroundColor}
            icon={icon}
            iconPosition={iconPosition}
            onClick={onClick}
        >
            {icon && iconPosition === "left" && <IconButton>{icon}</IconButton>}
            {children}
            {icon && iconPosition === "right" && (
                <IconButton>{icon}</IconButton>
            )}
        </Styled.Button>
    );
};
