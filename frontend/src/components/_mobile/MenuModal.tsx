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
    useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "components/Logo";

export const MenuModal = () => {
    const { isOpen, onOpen, onClose } = useMenuContext();
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();

    return (
        <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay zIndex="99" />
                <DrawerContent bgColor="backgroundTertiary">
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
