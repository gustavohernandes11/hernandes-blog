import { SimpleGrid } from "@chakra-ui/react";

export const ArticleGrid = ({ children }: any) => {
    return (
        <SimpleGrid
            gap="1rem"
            minChildWidth={["250px", "275px", "300px"]}
            margin="1rem 0"
        >
            {children}
        </SimpleGrid>
    );
};
