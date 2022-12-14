import { Container } from "@chakra-ui/react";
import { Search } from "@styled-icons/feather";
import { AuthorProfile } from "components/AuthorProfile";
import { IconButton } from "components/IconButton";
import { Nav } from "../components/Nav";
import { SocialBar } from "../components/SocialBar";
import React from "react";
import { Logo } from "components/Logo";

export const Aside = ({ ...props }) => {
    return (
        <Container
            display={["none", null, "flex"]}
            position="relative"
            flexDirection="column"
            bgColor="custom.darkPurple"
            borderColor="custom.border"
            border="1px solid"
            className="aside"
            padding="3rem 1rem"
            height="100vh"
            {...props}
        >
            <Logo />
            <Nav />
            <SocialBar mt="auto" />
        </Container>
    );
};
