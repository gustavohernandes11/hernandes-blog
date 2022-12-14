import * as S from "./styles";
import { Menu } from "@styled-icons/feather";
import { Logo } from "components/Logo";
import { Icon, IconButton } from "@chakra-ui/react";

export const Header = () => {
    return (
        <S.Container>
            <span>
                <Logo height={25} />
                <p>Blog de Desenvolvimento Web</p>
            </span>

            <IconButton
                border="none"
                padding="1rem 0.8rem"
                borderRadius={6}
                aria-label={"menu"}
                colorScheme="darkPurple"
            >
                <Icon color="#d9d9d9" fontSize={20} strokeWidth={2} as={Menu} />
            </IconButton>
        </S.Container>
    );
};
