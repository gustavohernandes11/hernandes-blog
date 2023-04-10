import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import Link from "next/link";

export const SocialBar = () => {
    return (
        <ul>
            <li>
                <SocialBarButton
                    ariaLabel="github-social"
                    link="https://github.com/gustavohernandes11"
                    icon={<Github height={30} width={30} />}
                />
            </li>
            <li>
                <SocialBarButton
                    ariaLabel="linkedin-social"
                    link="https://www.linkedin.com/in/gustavo-hernandes11/"
                    icon={<Linkedin height={30} width={30} />}
                />
            </li>
        </ul>
    );
};

type SocialBarButtonProps = {
    link: string;
    ariaLabel: string;
    icon: React.ReactNode;
};

const SocialBarButton = ({ link, ariaLabel, icon }: SocialBarButtonProps) => {
    return (
        <button aria-label={ariaLabel}>
            <Link href={link} target="_blank">
                {icon}
            </Link>
        </button>
    );
};
