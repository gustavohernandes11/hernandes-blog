import * as S from "./styles";
export type SizesOptions = "large" | "medium" | "small";

type LogoInterface = {
    size?: SizesOptions;
    textAlign?: "center" | "start" | "end"
};
export const Logo = ({ size = "large", textAlign = "center" }: LogoInterface) => {
    const props = {
        size: size,
        textAlign: textAlign,
    };
    return (
        <S.Logo {...props}>
            Hernandes
        </S.Logo>
    );
};
