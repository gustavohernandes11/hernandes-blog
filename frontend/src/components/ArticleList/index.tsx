import { Container, Grid } from "@chakra-ui/react";
import * as S from "./styles";

export const ArticleList = ({ children }: any) => {
    return (
        <Grid
            templateColumns="repeat(auto-fill, minmax(18rem, 1fr))"
            flexDirection="column"
            gap="0.5rem"
            margin="0 auto"
        >
            {children}
        </Grid>
    );
};
