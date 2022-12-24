import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import Link from "next/link";
import { IconButton, List, ListItem } from "@chakra-ui/react";

export const SocialBar = ({ ...props }) => {
    return (
        <List
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            textDecor="none"
            listStyleType="none"
            justifyContent="center"
            padding="0"
            className="social-bar"
            {...props}
        >
            <ListItem>
                <IconButton aria-label="github-social" variant="ghost">
                    <Link
                        href="https://github.com/gustavohernandes11"
                        target="_blank"
                    >
                        <Github height={20} width={20} color="primaryColor" />
                    </Link>
                </IconButton>
            </ListItem>
            <ListItem>
                <IconButton aria-label="linkedin-social" variant="ghost">
                    <Link
                        href="https://www.linkedin.com/in/gustavo-hernandes11/"
                        target="_blank"
                    >
                        <Linkedin height={20} width={20} color="primaryColor" />
                    </Link>
                </IconButton>
            </ListItem>
        </List>
    );
};
