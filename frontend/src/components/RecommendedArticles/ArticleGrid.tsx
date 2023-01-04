import { SimpleGrid } from "@chakra-ui/react";

export const ArticleGrid = ({ children }: any) => {
    return (
        <SimpleGrid
            gap="1rem"
            columns={[1, null, null, 2]}
            order={[null, null, null, "revert"]}
            margin="1rem 0"
        >
            {children}
        </SimpleGrid>
    );
};
