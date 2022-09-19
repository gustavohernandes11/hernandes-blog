import * as Styled from "./styles";
import { Typography } from "@mui/material";
import { FloatingActionButtonMold } from "../FloatingActionButtonMold";

export const Footer = (): JSX.Element => {
    return (
        <>
            <Styled.Container aria-label="footer" id="footer">
                <Typography variant="overline" mt={5} align="center">
                    Criado com Next.js
                </Typography>
            </Styled.Container>
            <FloatingActionButtonMold />
        </>
    );
};
