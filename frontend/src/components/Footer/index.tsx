import * as Styled from "./styles.js";
import { Typography } from "@mui/material";

export const Footer = ({children}: any) => {
    return (
        <Styled.Container>
            <Typography id="footer" variant="overline" mt={5} align="center">
                { children }
            </Typography>
        </Styled.Container>
    );
};
