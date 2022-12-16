import {
    Center,
    Container,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Nav } from "../components/Nav";
import { SocialBar } from "../components/SocialBar";
import React from "react";
import { Logo } from "components/Logo";

export const Aside = ({ ...props }) => {
    const { colorMode } = useColorMode();

    return (
        <Container
            display={["none", null, null, "flex"]}
            position="relative"
            flexDirection="column"
            bgColor={colorMode === "dark" ? "custom.darkPurple" : "custom.gray"}
            color="custom.text"
            gap="3rem"
            borderRight="1px solid"
            borderColor="custom.border"
            className="aside"
            padding={["2rem", null, null, "3rem"]}
            height="100vh"
            {...props}
        >
            <Logo />
            <Nav />
            <SocialBar mt="auto" />
        </Container>
    );
};
