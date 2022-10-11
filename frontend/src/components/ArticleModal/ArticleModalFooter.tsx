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
    const props = {
        categoryColor: categoryColor,
    };
    return (
        <Styled.Footer {...props}>
            <p className="category">{articleCategory}</p>
            <time>{articleDate}</time>
        </Styled.Footer>
    );
};
