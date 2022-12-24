import { Home, ChevronsUp } from "@styled-icons/feather";

import Link from "next/link";
import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { ToggleThemeButton } from "components/ToggleThemeButton";
import { useMotionValue, useScroll } from "framer-motion";
import { useEffect } from "react";

export const MenuBar = () => {
    const { scrollYProgress } = useScroll();
    const finalScroll = useMotionValue(1);

    useEffect(() => {
        console.log(scrollYProgress);
        console.log(finalScroll);
    }, [scrollYProgress, finalScroll]);

    return (
        <Flex
            display={["flex", null, null, "none"]}
            height="60px"
            width="100vw"
            justify="space-evenly"
            align="center"
            position="fixed"
            bottom={0}
            right={0}
            backgroundColor="backgroundTertiary"
        >
            <ToggleThemeButton color="textColor" />
            <MenuButton
                icon={Home}
                aria-label="Go home"
                as={Link}
                href={"/"}
                primary
            />
            <MenuButton
                icon={ChevronsUp}
                aria-label="Go top"
                onClick={backToTop}
                color={
                    scrollYProgress.get() === finalScroll.get()
                        ? "primaryColor"
                        : "textColor"
                }
            />
        </Flex>
    );
};

export const MenuButton = ({
    icon,
    onClick,
    primary,
    ariaLabel,
    ...props
}: any) => {
    return (
        <IconButton
            color="textColor"
            fontSize={20}
            variant={primary ? "solid" : "ghost"}
            colorScheme="darkGray"
            onClick={onClick}
            aria-label={ariaLabel}
            {...props}
        >
            <Icon strokeWidth={2} as={icon} />
        </IconButton>
    );
};

function backToTop() {
    const content = document.getElementsByClassName("content");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    content[0].scrollTop = 0;
}
