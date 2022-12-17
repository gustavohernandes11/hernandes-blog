import { ChevronLeft, ChevronRight } from "@styled-icons/feather";
import { Flex, IconButton, Text } from "@chakra-ui/react";

export const Pagination = ({ page = 1, count, onChange }: any) => {
    return (
        <Flex
            justify="center"
            align="center"
            gap="1rem"
            padding={["1rem 0", null, null, "3rem 0"]}
            fontSize="0.8rem"
        >
            <IconButton variant="ghost" aria-label={"Slide anterior"}>
                <ChevronLeft size={20} />
            </IconButton>
            <Text>
                Página {page} de {count}
            </Text>
            <IconButton variant="ghost" aria-label={"Próximo slide"}>
                <ChevronRight size={20} />
            </IconButton>
        </Flex>
    );
};
