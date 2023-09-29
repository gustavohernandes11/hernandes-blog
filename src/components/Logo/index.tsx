import Image from "next/image";
import LightLogo from "../../../public/LightLogo.svg";
import DarkLogo from "../../../public/DarkLogo.svg";
import { useThemeContext } from "contexts/useThemeContext";

export const Logo = () => {
    const [theme] = useThemeContext();
    const themedLogo = () => (theme === "light" ? LightLogo : DarkLogo);

    return <Image src={themedLogo()} alt="logotipo" width={130} height={30} />;
};
