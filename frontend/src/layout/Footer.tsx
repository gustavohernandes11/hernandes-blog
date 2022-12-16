import { Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export const Footer = ({ ...props }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            flexDirection="row"
            w="100%"
            maxW="100vw"
            h="100%"
            maxH="100vh"
            padding="1rem"
            bgColor={colorMode === "dark" ? "custom.darkPurple" : "custom.gray"}
            color={colorMode === "dark" ? "custom.gray" : "custom.dark"}
            borderTop="1px solid"
            borderColor="custom.border"
            justify="center"
            align="center"
            {...props}
        >
            <Text color="darkgray">{`Criado com Next.js`}</Text>
        </Flex>
    );
};
