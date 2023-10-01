import Link from "next/link";
import * as Styled from "./styles";

type ArticleProps = {
    title: string;
    description: string;
    date: string;
    category: string;
    slug: string;
};

export const Article = ({
    category,
    title,
    date,
    slug,
    description,
}: ArticleProps) => {
    return (
        <Link href={`/articles/${slug}`}>
            <Styled.ArticleContainer>
                <Styled.ArticleTitle>{title}</Styled.ArticleTitle>
                <Styled.ArticleDescription>
                    {description}
                </Styled.ArticleDescription>
                <Styled.RowContainer>
                    <time>{date}</time>
                    <p>·</p>
                    <p>{category}</p>
                </Styled.RowContainer>
            </Styled.ArticleContainer>
        </Link>
    );
};
