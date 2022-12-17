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
    useColorMode,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";

export const MenuModal = () => {
    const [isMenuOpen, setIsMenuOpen] = useMenuContext();
    const { colorMode } = useColorMode();

    return (
        <>
            <Drawer
                isOpen={isMenuOpen}
                placement="left"
                onClose={() => setIsMenuOpen(false)}
            >
                <DrawerOverlay zIndex="99" />
                <DrawerContent
                    bgColor={
                        colorMode === "dark" ? "custom.darkPurple" : "#ebebeb"
                    }
                    borderRadius="0 16px 16px 0"
                >
                    <DrawerHeader
                        bgColor="custom.darkPurple"
                        padding="1.5rem"
                        borderBottom="1px solid"
                        borderColor="custom.border"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Logo />
                    </DrawerHeader>
                    <DrawerBody padding="2.5rem">
                        <Nav />
                    </DrawerBody>
                    <DrawerFooter
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <SocialBar />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
