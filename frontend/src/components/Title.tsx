import { Text } from "@chakra-ui/react";

type TitleProps = {
    children: string;
};
export const Title = ({ children }: TitleProps) => {
    return (
        <Text
            as="h1"
            fontSize={["2rem", "3.2rem"]}
            mb="2rem"
            fontWeight={900}
            lineHeight={["2.4rem", "3.4rem"]}
        >
            {children}
        </Text>
    );
};
