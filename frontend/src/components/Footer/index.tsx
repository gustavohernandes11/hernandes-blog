import * as Styled from "./styles";
import { Typography } from "@mui/material";
import { FloatingActionButtonMold } from "../FloatingActionButtonMold";
import { SocialBar } from "../SocialBar";

export const Footer = (): JSX.Element => {
    return (
        <>
            <Styled.Container aria-label="footer" id="footer">
                <p>Criado com Next.js</p>

                <SocialBar />
            </Styled.Container>
        </>
    );
};
