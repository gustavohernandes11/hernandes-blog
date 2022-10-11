import * as Styled from "./styles";
import { Heading } from "../Heading";

export type SizesOptions = "large" | "medium" | "small";

type LogoInterface = {
    size?: SizesOptions;
};
export const Logo = ({ size = "large" }: LogoInterface) => {
    const props = {
        size: size,
    };
    return (
        <Styled.Container {...props}>
            <Heading aria-label="aside-logo" className="logo">
                {`H E R \n N A N \n D E S`}
            </Heading>
        </Styled.Container>
    );
};
