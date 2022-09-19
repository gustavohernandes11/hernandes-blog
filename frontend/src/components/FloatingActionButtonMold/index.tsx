import { Fab } from "@mui/material";
import * as Styled from './styles'
import { X } from "@styled-icons/heroicons-outline";

export const FloatingActionButtonMold = (): JSX.Element => {
    return (
        <Styled.Container>
            {window.screen.width <= 425 && (
                <Fab
                    size="medium"
                    id="floating-action-button-mold"
                >
                        <X id="floating-action-button-mold-roll" width={25} height={25} />
                </Fab>
            )}
        </Styled.Container>
    );
};
