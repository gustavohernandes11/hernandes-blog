import { Text } from "@chakra-ui/react";

type TitleProps = {
    children: string;
};
export const Title = ({ children }: TitleProps) => {
    return (
        <Text
            as="h1"
            fontSize="3.2rem"
            mb="2rem"
            fontWeight={900}
            lineHeight="3.4rem"
        >
            {children}
        </Text>
    );
};
