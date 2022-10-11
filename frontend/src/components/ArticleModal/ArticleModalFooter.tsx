import * as Styled from "./styles";

type ArticleModalFooterType = {
    articleDate?: string | null;
    articleCategory?: string | null;
    categoryColor?: string;
};
export const ArticleModalFooter = ({
    articleDate = null,
    articleCategory = null,
    categoryColor,
}: ArticleModalFooterType) => {
    return (
        <Styled.Footer>
            <p className="category" categoryColor={categoryColor}>
                {articleCategory}
            </p>
            <time>{articleDate}</time>
        </Styled.Footer>
    );
};
