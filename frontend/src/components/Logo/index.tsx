import * as S from "./styles";
import LogoIMG from '../../../public/Logo.png'
import LogoExtensiveIMG from '../../../public/LogoExtensive.png'
import Image from "next/image";

type LogoInterface = {
    variant?: "small" | "extended",
    width?: number,
    height?: number,
};
export const Logo = ({ variant, width, height = 30 }: LogoInterface) => {


    return (
        <>
            {variant === "small"
                ? <Image src={LogoIMG} width={width || 25} alt="logo" />
                : <Image src={LogoExtensiveIMG} height={height} alt="logo" />
            }
        </>

    );
};
