import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import Link from "next/link";
import { IconButton, List, ListItem } from "@chakra-ui/react";

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
                <IconButton
                    aria-label="github-social"
                    colorScheme="blackAlpha"
                    textColor="primaryColor"
                    variant="ghost"
                >
                    <Link
                        href="https://github.com/gustavohernandes11"
                        target="_blank"
                    >
                        <Github height={20} width={20} />
                    </Link>
                </IconButton>
            </ListItem>
            <ListItem>
                <IconButton
                    aria-label="linkedin-social"
                    variant="ghost"
                    colorScheme="blackAlpha"
                    textColor="primaryColor"
                >
                    <Link
                        href="https://www.linkedin.com/in/gustavo-hernandes11/"
                        target="_blank"
                    >
                        <Linkedin height={20} width={20} />
                    </Link>
                </IconButton>
            </ListItem>
        </List>
    );
};
