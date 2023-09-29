import Image from "next/image";
import * as Styled from "./styles";
import LogoIMG from "../../../public/Logo.svg";

export const Logo = () => {
    return <Image src={LogoIMG} alt="logotipo" width={204} height={56} />;
};
