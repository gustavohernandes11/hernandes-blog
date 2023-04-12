import { Nav } from "components/Nav";
import { SocialBar } from "components/SocialBar";
import { useMenuContext } from "hooks/useMenuContext";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";
import { theme } from "styles/theme";

export const Menu = () => {
    const { isOpen, onClose } = useMenuContext();

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="start"
                size={"full"}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent
                    bgColor={theme.secondaryBackgroundColor}
                    p="2rem"
                    display="grid"
                    flexDirection="column"
                >
                    <DrawerHeader
                        p="1.5rem"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Logo />
                    </DrawerHeader>
                    <DrawerBody
                        flexDirection="column"
                        justifyContent="center"
                        p="3rem"
                    >
                        <Nav direction="column" />
                    </DrawerBody>
                    <DrawerFooter>
                        <SocialBar direction="row" />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
