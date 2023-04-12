import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import styled, { css } from "styled-components";
import Link from "next/link";
import { mixin } from "styles/mixins";

type SocialBarType = {
    direction?: "column" | "row";
};
export const SocialBar = ({ direction = "column" }: SocialBarType) => {
    const socialBarProps = {
        direction: direction,
    };
    return (
        <StyledUnordedList {...socialBarProps}>
            <li>
                <SocialBarButton
                    text="Github"
                    ariaLabel="github-social"
                    link="https://github.com/gustavohernandes11"
                    icon={<Github height={20} width={20} />}
                />
            </li>
            <li>
                <SocialBarButton
                    text="LinkedIn"
                    ariaLabel="linkedin-social"
                    link="https://www.linkedin.com/in/gustavo-hernandes11/"
                    icon={<Linkedin height={20} width={20} />}
                />
            </li>
        </StyledUnordedList>
    );
};

type SocialBarButtonProps = {
    link: string;
    text: string;
    ariaLabel: string;
    icon: React.ReactNode;
};

const SocialBarButton = ({
    link,
    ariaLabel,
    icon,
    text,
}: SocialBarButtonProps) => {
    return (
        <Link href={link} target="_blank">
            <StyledButton aria-label={ariaLabel}>
                <i>{icon}</i>
                <p>{text} ↗</p>
            </StyledButton>
        </Link>
    );
};

const StyledUnordedList = styled.ul`
    ${({ direction }: SocialBarType) =>
        direction === "row" &&
        css`
            display: flex;
            flex-direction: ${direction};
            gap: 1rem;
            margin-inline: auto;
        `};
    list-style: none;
    padding: 0;
`;

const StyledButton = styled.button`
    ${mixin.buttonStyle};
    ${mixin.flexCenter};
    margin: 0.5rem 0;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.surfaceColorHover};
        p {
            display: flex;
        }
    }
    p {
        margin: 0 0 0 1rem;
        display: none;
        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;
