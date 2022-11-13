import * as S from "./styles";
export type SizesOptions = "large" | "medium" | "small";

type LogoInterface = {
    size?: SizesOptions;
};
export const Logo = ({ size = "large" }: LogoInterface) => {
    const props = {
        size: size,
    };
    return (
        <S.Logo {...props}>
            Hernandes
        </S.Logo>
    );
};
