import { mixin } from "styles/mixins";
import styled from "styled-components";

type MenuButtonType = {
    primary?: boolean;
    ariaLabel?: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
};
export const MenuButton = ({
    icon,
    onClick,
    primary,
    ariaLabel,
    href,
    ...props
}: MenuButtonType) => {
    const menuButtonProps = {
        primary: primary,
    };
    return (
        <StyledButton
            {...menuButtonProps}
            onClick={onClick}
            aria-label={ariaLabel}
            {...props}
        >
            {icon}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    ${mixin.buttonStyle};
    background: ${(props: any) =>
        props.primary ? props.theme.borderColor : "none"};
`;
