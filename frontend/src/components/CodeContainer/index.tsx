import { useState, useRef } from "react";
import { Copy } from "@styled-icons/feather";
import { Container, IconButton, Tooltip } from "@chakra-ui/react";
import styled from "styled-components";
import { mixin } from "styles/mixins";

interface CodeContainerType {
    children: React.ReactNode | React.ReactNode[];
}

export function CodeContainer({ children }: CodeContainerType) {
    const [isHover, setisHover] = useState(false);

    const codeRef = useRef<any>(null);

    const copyToClipboard = (): void => {
        if (codeRef.current != null && codeRef.current.innerText) {
            let codeElement = codeRef.current.innerText;
            navigator.clipboard.writeText(codeElement);
        }
    };

    return (
        <StyledWrapper
            ref={codeRef}
            aria-label="code-container"
            onMouseOver={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
        >
            {children}

            {isHover && (
                <Tooltip hasArrow label="Copiar" placement="left">
                    <StyledCopyButton
                        onClick={copyToClipboard}
                        aria-label="copy-code-button"
                    >
                        <Copy size={20} />
                    </StyledCopyButton>
                </Tooltip>
            )}
        </StyledWrapper>
    );
}

const StyledCopyButton = styled.button`
    ${mixin.buttonStyle};
    position: absolute;
    margin: 0;
    top: 1rem;
    right: 1.25rem;
    color: ${({ theme }) => theme.primaryColor};
`;
const StyledWrapper = styled.pre`
    display: block;
    position: relative;
    white-space: break-spaces;
    font-size: 1rem;
    padding: 0px;
    overflow-x: auto;
    max-width: 100vw;
    width: 100%;
`;
