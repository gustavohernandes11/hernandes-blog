import * as Styled from "./styles.js";
import { ClipboardCopy } from "@styled-icons/heroicons-solid";
import { useState, useRef } from "react";
import { IconButton, Tooltip } from "@mui/material";

export function CodeContainer({ children }: any) {
    const [isHover, setisHover] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeRef.current.innerText);
    };
    const codeRef = useRef(null);

    return (
        <Styled.Container
            ref={codeRef}
            aria-label="code-container"
            onMouseOver={() => setisHover(() => true)}
            onMouseLeave={() => setisHover(() => false)}
        >
            {children}
            {isHover && (
                <Tooltip arrow placement="left" title="Copy">
                    <IconButton
                        onClick={copyToClipboard}
                        aria-label="copy-code-button"
                        className="copy-code-button"
                    >
                        <ClipboardCopy width={20} height={20} />
                    </IconButton>
                </Tooltip>
            )}
        </Styled.Container>
    );
}
