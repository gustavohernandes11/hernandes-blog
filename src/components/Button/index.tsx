import { IconButton } from "components/IconButton";
import * as Styled from "./styles";
import Link from "next/link";

type ButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    onClick?: () => void;
    icon?: React.ReactElement;
    iconPosition?: "left" | "right";
    href?: string;
};

export const Button = ({
    children,
    href,
    backgroundColor,
    onClick,
    icon,
    iconPosition = "right",
}: ButtonProps) => {
    return (
        <>
            {href ? (
                <Link href={href}>
                    <Styled.Button
                        backgroundColor={backgroundColor}
                        icon={icon}
                        iconPosition={iconPosition}
                        onClick={onClick}
                    >
                        {icon && iconPosition === "left" && (
                            <IconButton>{icon}</IconButton>
                        )}
                        {children}
                        {icon && iconPosition === "right" && (
                            <IconButton>{icon}</IconButton>
                        )}
                    </Styled.Button>
                </Link>
            ) : (
                <Styled.Button
                    backgroundColor={backgroundColor}
                    icon={icon}
                    iconPosition={iconPosition}
                    onClick={onClick}
                >
                    {icon && iconPosition === "left" && (
                        <IconButton>{icon}</IconButton>
                    )}
                    {children}
                    {icon && iconPosition === "right" && (
                        <IconButton>{icon}</IconButton>
                    )}
                </Styled.Button>
            )}
        </>
    );
};
