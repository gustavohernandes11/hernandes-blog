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
    Text,
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
                    bgColor="backgroundTertiary"
                    borderRadius="0 16px 16px 0"
                >
                    <DrawerHeader
                        padding="1.5rem"
                        borderBottom="1px solid"
                        borderColor="borderColor"
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
                        flexDirection="column"
                    >
                        <SocialBar mb="1rem" />
                        <Text color="textColorSecondary">{`Criado com Next.js`}</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
