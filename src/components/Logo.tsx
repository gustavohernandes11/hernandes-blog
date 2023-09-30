import Image from "next/image";
import LightLogo from "../../public/LightLogo.svg";
import DarkLogo from "../../public/DarkLogo.svg";
import { useThemeContext } from "hooks/useThemeContext";

type LogoProps = {
    scale?: 1 | 1.25 | 1.5 | 1.75 | 2.0;
};
export const Logo = ({ scale = 1 }: LogoProps) => {
    const [theme] = useThemeContext();
    const getThemedLogo = () => (theme === "light" ? LightLogo : DarkLogo);

    return (
        <Image
            src={getThemedLogo()}
            alt="logotipo"
            width={130 * scale}
            height={30 * scale}
        />
    );
};
