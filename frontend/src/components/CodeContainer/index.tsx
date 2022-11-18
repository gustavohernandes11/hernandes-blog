import { useState, useRef } from "react";
import * as Styled from "./styles";

import { Copy } from '@styled-icons/feather'
import { IconButton } from "components/IconButton";

interface CodeContainerType {
    children: React.ReactNode | React.ReactNode[];
}

export function CodeContainer({ children }: CodeContainerType) {
    const [isHover, setisHover] = useState(false);

    const codeRef = useRef<HTMLBodyElement | null>(null);

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
                <IconButton
                    onClick={copyToClipboard}
                    aria-label="copy-code-button"
                    className="copy-code-button"
                >
                    <Copy size={20} />
                </IconButton>
            )}
        </Styled.Container>
    );
}
