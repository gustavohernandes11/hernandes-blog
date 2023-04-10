import styled from "styled-components";
import LogoIMG from "../../public/Logo.png";
import LogoExtensiveIMG from "../../public/LogoExtensive.png";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    variant?: "small" | "extended";
    width?: number;
    height?: number;
};

export const Logo = ({ variant, width, height = 30 }: LogoProps) => {
    return (
        <Link href="/" passHref={true}>
            {/* {variant === "small" ? (
                <Image src={LogoIMG} width={width || 25} alt="logo" />
            ) : (
                <Image src={LogoExtensiveIMG} height={height} alt="logo" />
            )} */}
            <StyledText>undefined</StyledText>
        </Link>
    );
};
const StyledText = styled.h1`
    font-family: ${(props) => props.theme.primaryFontFamily};
    font-size: 1.5rem;
`;
