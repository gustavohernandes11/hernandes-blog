import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = ({ ...props }) => {
    return (
        <Flex
            flexDirection="row"
            w="100%"
            maxW="100vw"
            h="100%"
            maxH="100vh"
            padding="1rem"
            bgColor="backgroundTertiary"
            color="textColor"
            borderTop="1px solid"
            borderColor="borderColor"
            justify="center"
            align="center"
            {...props}
        >
            <Text color="textColorSecondary">{`Criado com Next.js`}</Text>
        </Flex>
    );
};
