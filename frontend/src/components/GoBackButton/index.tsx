import { ArrowLeft } from "@styled-icons/feather";
import { IconButton } from "components/IconButton";
import * as S from "./styles";

export const GoBackButton = () => {
    return (
        <S.StyledLink href="/" replace>
            <IconButton className="go-back">
                <ArrowLeft size={20} /> Voltar
            </IconButton>
        </S.StyledLink>
    );
};
