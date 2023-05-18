import { useEffect, useState } from "react";
import NoSSRWrapper from "components/NoSSRWrapper";
import { useRouter } from "next/router";

import * as S from "./styles";
import { ArrowLeft, Share2 } from "@styled-icons/feather";
import { MenuButton } from "../MenuButton";

type ArticlePageHeaderType = {
    postTitle: string;
};
const iconProps = {
    strokeWidth: 2,
    size: 20,
    color: "#F1F1F1",
};

export const ArticlePageHeader = ({ postTitle }: ArticlePageHeaderType) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 300) {
                setIsVisible(() => true);
            } else {
                setIsVisible(() => false);
            }
        });
    });

    return (
        <NoSSRWrapper>
            <S.Container isVisible={isVisible}>
                <S.Item>
                    <MenuButton
                        icon={
                            <ArrowLeft
                                onClick={() => router.back()}
                                {...iconProps}
                            />
                        }
                        ariaLabel="Go back"
                    />
                </S.Item>
                <S.Item>
                    <p className="title">{postTitle}</p>
                </S.Item>
                <S.Item>{/* <Share2 {...iconProps} /> TODO */}</S.Item>
            </S.Container>
        </NoSSRWrapper>
    );
};
