import { useThemeContext } from "hooks/useThemeContext";
import Image from "next/image";
import DarkLogo from "../../public/DarkLogo.svg";
import LightLogo from "../../public/LightLogo.svg";

type ILogoProps = {
    scale?: 1 | 1.25 | 1.5 | 1.75 | 2.0;
};
export const Logo = ({ scale = 1 }: ILogoProps) => {
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
