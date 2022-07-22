import * as Styled from "./styles.js";
import { Typography } from "@mui/material";

export const PostDescription = ({ children }: any) => {
    return (
        <Styled.Container>
            <Typography paragraph={true}>{children}</Typography>
        </Styled.Container>
    );
};
