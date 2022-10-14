import { useState, useRef } from "react";
import * as Styled from "./styles";


import { IconButton, Tooltip } from "@mui/material";
import { ClipboardCopy } from "@styled-icons/heroicons-solid";

interface CodeContainerType {
    children: React.ReactNode | React.ReactNode[];
}

export function CodeContainer({ children }: CodeContainerType) {
    const [isHover, setisHover] = useState(false);

    const codeRef = useRef<HTMLBodyElement>(null);

    const copyToClipboard = (): void => {
        if (codeRef.current != null && codeRef.current.innerText) {
            let codeElement = codeRef.current.innerText;
            navigator.clipboard.writeText(codeElement);
        }
    };

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
