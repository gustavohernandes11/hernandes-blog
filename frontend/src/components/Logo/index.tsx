import * as Styled from "./styles";
import { Heading } from "../Heading";


type LogoInterface = {
    size?: "large" | "medium" | "small";
}
export const Logo = ({size}: LogoInterface) => {
    return (
        <Styled.Container size={size}>
            <Heading aria-label="aside-logo" className="logo">
                {`H E R \n N A N \n D E S`}
            </Heading>
        </Styled.Container>
    );
};
