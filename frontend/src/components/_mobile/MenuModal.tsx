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
    const { isOpen, onClose } = useMenuContext();

    return (
        <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay zIndex="99" />
                <DrawerContent bgColor="backgroundTertiary" p="2rem">
                    <DrawerHeader
                        p="1.5rem"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Logo />
                    </DrawerHeader>
                    <DrawerBody p="3rem">
                        <Nav />
                    </DrawerBody>
                    <DrawerFooter
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <SocialBar mb="0.75rem" />
                        <Text color="textColorSecondary">{`Criado com Next.js`}</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
