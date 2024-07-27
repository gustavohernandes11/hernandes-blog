import Link from "next/link";
import { IArticlePreview } from "types/IArticlePreview";
import * as Styled from "./styles";

export const Article = ({
    category,
    title,
    date,
    slug,
    description,
}: IArticlePreview) => {
    return (
        <Link href={`/articles/${slug}`}>
            <Styled.ArticleContainer>
                <Styled.ArticlePublishDate>{date}</Styled.ArticlePublishDate>
                <Styled.ArticleTitle>{title}</Styled.ArticleTitle>
                <Styled.ArticleDescription>
                    {description}
                </Styled.ArticleDescription>
                <Styled.ArticleCategory>{category}</Styled.ArticleCategory>
            </Styled.ArticleContainer>
        </Link>
    );
};
