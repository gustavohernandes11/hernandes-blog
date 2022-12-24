import { Center, Container } from "@chakra-ui/react";
import { Nav } from "../components/Nav";
import { SocialBar } from "../components/SocialBar";
import React from "react";
import { Logo } from "components/Logo";

export const Aside = ({ ...props }) => {
    return (
        <Container
            display={["none", null, null, "flex"]}
            position="relative"
            flexDirection="column"
            bgColor="backgroundTertiary"
            color="textColor"
            gap="3rem"
            borderRight="1px solid"
            borderColor="borderColor"
            className="aside"
            padding="1.5rem"
            height="100vh"
            {...props}
        >
            <Center>
                <Logo />
            </Center>
            <Nav />
            <SocialBar mt="auto" />
        </Container>
    );
};
