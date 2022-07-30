import * as Styled from "./styles.js";
import { ClipboardCopy } from "@styled-icons/heroicons-solid";
import { useState } from "react";
import { IconButton } from "@mui/material";

export function Code({ children }: any) {
    const [isHover, setisHover] = useState(false);

    return (
        <Styled.Container
            aria-label="code-container"
            onMouseOver={() => setisHover(() => true)}
            onMouseLeave={() => setisHover(() => false)}
        >
            {children}
            {isHover && (
                <IconButton
                    aria-label="copy-code-button"
                    className="copy-code-button"
                >
                    <ClipboardCopy width={20} height={20} />
                </IconButton>
            )}
        </Styled.Container>
    );
}
