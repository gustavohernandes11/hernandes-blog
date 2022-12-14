import { Flex, Text } from "@chakra-ui/react";

export const Footer = ({ ...props }) => {
    return (
        <Flex
            flexDirection="row"
            padding="1rem"
            bgColor="custom.darkPurple"
            justify="center"
            align="center"
            {...props}
        >
            <Text color="custom.white">{`Criado com Next.js`}</Text>
        </Flex>
    );
};
