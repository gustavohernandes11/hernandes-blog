import { Flex, Icon, IconButton, Menu, useColorMode } from "@chakra-ui/react";
import { Menu as MenuIcon, X } from "@styled-icons/feather";
import { ToggleThemeButton } from "components/ToggleThemeButton";
import { useMenuContext } from "hooks/useMenuContext";
import React from "react";
import { Logo } from "../components/Logo";

export const Header = ({ ...props }) => {
    const [isMenuOpen, setIsMenuOpen] = useMenuContext();
    const { colorMode } = useColorMode();

    return (
        <Flex
            w="100%"
            maxW="100vw"
            h="100%"
            bgColor={colorMode === "dark" ? "custom.darkGray" : "custom.gray"}
            maxH="100vh"
            borderBottom="1px solid"
            borderColor="custom.border"
            padding="1rem 2rem"
            {...props}
        >
            <Flex
                justify="center"
                align="center"
                display={{ lg: "none", base: "flex" }}
            >
                <Logo />
            </Flex>

            <FloatingMenuButton
                display={{ lg: "none", base: "flex" }}
                isMenuOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <Flex
                display={{ lg: "flex", base: "none" }}
                w="100%"
                align="center"
                justifyContent="end"
            >
                <ToggleThemeButton
                    color={colorMode === "dark" ? "custom.gray" : "custom.dark"}
                />
            </Flex>
        </Flex>
    );
};

const FloatingMenuButton = ({ onClick, isMenuOpen, ...props }: any) => {
    return (
        <IconButton
            onClick={onClick}
            display="flex"
            border="1px solid"
            borderColor="custom.border"
            borderRadius={6}
            aria-label={"menu"}
            colorScheme="black"
            position="fixed"
            top="1rem"
            right="2rem"
            zIndex="overlay"
            {...props}
        >
            <Icon
                color="#d9d9d9"
                fontSize={20}
                strokeWidth={2}
                as={isMenuOpen ? X : MenuIcon}
            />
        </IconButton>
    );
};
