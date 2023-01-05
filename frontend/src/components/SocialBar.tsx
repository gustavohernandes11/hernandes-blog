import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import { IconButton, List, ListItem, Link } from "@chakra-ui/react";

export const SocialBar = ({ ...props }) => {
    return (
        <List
            display="flex"
            flexDirection="row"
            textDecor="none"
            listStyleType="none"
            justifyContent="center"
            padding="0"
            {...props}
        >
            <ListItem>
                <SocialBarButton
                    ariaLabel="github-social"
                    link="https://github.com/gustavohernandes11"
                    icon={<Github height={30} width={30} />}
                />
            </ListItem>
            <ListItem>
                <SocialBarButton
                    ariaLabel="linkedin-social"
                    link="https://www.linkedin.com/in/gustavo-hernandes11/"
                    icon={<Linkedin height={30} width={30} />}
                />
            </ListItem>
        </List>
    );
};

type SocialBarButtonProps = {
    link: string;
    ariaLabel: string;
    icon: React.ReactNode;
};

const SocialBarButton = ({ link, ariaLabel, icon }: SocialBarButtonProps) => {
    return (
        <IconButton
            aria-label={ariaLabel}
            variant="ghost"
            colorScheme="blackAlpha"
            size="lg"
            textColor="primaryColor"
        >
            <Link href={link} target="_blank">
                {icon}
            </Link>
        </IconButton>
    );
};
