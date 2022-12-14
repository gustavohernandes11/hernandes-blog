import { Box, Flex, Icon, IconButton, Menu } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../components/Logo";

export const Header = ({ ...props }) => {
    return (
        <Flex
            w="100%"
            maxW="100vw"
            h="100%"
            maxH="100vh"
            bgColor="custom.darkPurple"
            border="1px solid"
            borderColor="custom.border"
            color="custom.white"
            {...props}
        >
            <Flex w="300px" justify="center" align="center">
                <Logo />
            </Flex>

            <IconButton
                border="none"
                padding="1rem 0.8rem"
                borderRadius={6}
                aria-label={"menu"}
                variant="unstyled"
                bgColor="custom.background"
            >
                <Icon color="#d9d9d9" fontSize={20} strokeWidth={2} as={Menu} />
            </IconButton>
        </Flex>
    );
};
