import styled from "styled-components";
import LogoIMG from "../../public/Logo.svg";
import LogoExtendedIMG from "../../public/LogoExtensive.svg";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    variant?: "small" | "extensive";
    width?: number;
    height?: number;
};

export const Logo = ({ variant, width, height = 40 }: LogoProps) => {
    return (
        <Link href="/" passHref={true}>
            {variant === "small" ? (
                <Image src={LogoIMG} width={width || 25} alt="logo" />
            ) : (
                <Image src={LogoExtendedIMG} height={height} alt="logo" />
            )}
        </Link>
    );
};
const StyledText = styled.h1`
    font-family: ${(props) => props.theme.primaryFontFamily};
    font-size: 1.5rem;
`;
