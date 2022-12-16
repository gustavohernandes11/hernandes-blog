import { Grid } from "@chakra-ui/react";

export const ArticleList = ({ children }: any) => {
    return (
        <Grid
            templateColumns="repeat(auto-fill, minmax(18rem, 1fr))"
            flexDirection="column"
            gap={"1rem"}
            margin="0 auto"
        >
            {children}
        </Grid>
    );
};
