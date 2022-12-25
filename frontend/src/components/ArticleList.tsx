import { Grid } from "@chakra-ui/react";
import React from "react";

type ArticleListChildren = {
    children: React.ReactNode | React.ReactNode[];
};

export const ArticleList = ({ children }: ArticleListChildren) => {
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
