import { Box, Flex, Icon, IconButton, Menu } from "@chakra-ui/react";
import { Menu as MenuIcon } from "@styled-icons/feather";
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
            borderBottom="1px solid"
            borderColor="custom.border"
            color="custom.white"
            padding="1rem 2rem"
            display={{ lg: "none", base: "flex" }}
            {...props}
        >
            <Flex justify="center" align="center">
                <Logo />
            </Flex>

            <IconButton
                border="none"
                borderRadius={6}
                aria-label={"menu"}
                variant="unstyled"
                bgColor="custom.background"
                position="fixed"
                top="1rem"
                right="2rem"
                zIndex="overlay"
            >
                <Icon
                    color="#d9d9d9"
                    fontSize={20}
                    strokeWidth={2}
                    as={MenuIcon}
                />
            </IconButton>
        </Flex>
    );
};
