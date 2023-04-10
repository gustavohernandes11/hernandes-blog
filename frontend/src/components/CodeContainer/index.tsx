import { useState, useRef } from "react";
import { Copy } from "@styled-icons/feather";
import { Container, IconButton, Tooltip } from "@chakra-ui/react";

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
        <Container
            display="block"
            borderRadius={6}
            position="relative"
            whiteSpace="break-spaces"
            p={0}
            overflowX="auto"
            maxW="100vw"
            w="100%"
            ref={codeRef}
            aria-label="code-container"
            onMouseOver={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
        >
            {children}

            {isHover && (
                <Tooltip hasArrow label="Copiar" placement="left">
                    <IconButton
                        position="absolute"
                        color="purple.500"
                        variant="ghost"
                        m="0"
                        top="1rem"
                        right="1.25rem"
                        onClick={copyToClipboard}
                        aria-label="copy-code-button"
                    >
                        <Copy size={20} />
                    </IconButton>
                </Tooltip>
            )}
        </Container>
    );
}
