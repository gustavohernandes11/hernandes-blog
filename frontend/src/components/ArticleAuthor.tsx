import { Avatar, Center, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { SocialBar } from "./SocialBar";

export const ArticleAuthor = ({ ...props }) => {
    return (
        <Container
            w="100%"
            maxW="100%"
            marginY="2rem"
            bgColor="backgroundSecondary"
            {...props}
        >
            <Center
                maxW="35rem"
                mx="auto"
                my={["1.75rem", "2rem", null]}
                p="1rem"
                flexDirection="column"
                gap="0.5rem"
            >
                <Heading as="h3" size="md" my={["1rem", null, null, "2rem"]}>
                    Sobre o autor
                </Heading>
                <Avatar
                    size="lg"
                    src="https://github.com/gustavohernandes11.png"
                />

                <Text>Eu.</Text>
                <SocialBar />
            </Center>
        </Container>
    );
};
