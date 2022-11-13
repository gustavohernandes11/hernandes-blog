import * as Styled from "./styles";
import { Github, Linkedin } from "@styled-icons/boxicons-logos";
import Link from "next/link";

export const SocialBar = () => {
    return (
        <Styled.Container>
            <Link href="https://github.com/gustavohernandes11" target="_blank">
                <Github height={20} width={20} color="#856ABD" />
            </Link>
            <Link href="https://www.linkedin.com/in/gustavo-hernandes11/" target="_blank">
                <Linkedin height={20} width={20} color="#856ABD" />
            </Link>
        </Styled.Container>
    );
};
