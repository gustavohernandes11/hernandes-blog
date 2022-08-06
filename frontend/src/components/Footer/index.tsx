import * as Styled from "./styles.js";
import { Typography } from "@mui/material";

export const Footer = ({ children }: any): JSX.Element => {
    return (
        <Styled.Container aria-label="footer" id="footer">
            <Typography variant="overline" mt={5} align="center">
                Criado com Next.js
            </Typography>
        </Styled.Container>
    );
};
