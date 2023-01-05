import { ArticleGrid } from "./ArticleGrid";
import { SuggestedArticle } from "./SuggestedArticle";

export type ArticleProps = {
    title: string;
    excerpt: string;
    category: {
        name: string;
        color: string;
    };
    publishedAt: string;
    slug: string;
    direction?: "left" | "right";
};

type RecommendedArticlesProps = {
    nextArticle?: ArticleProps | null;
    prevArticle?: ArticleProps | null;
};

export const RecommendedArticles = ({
    nextArticle,
    prevArticle,
}: RecommendedArticlesProps) => {
    return (
        <ArticleGrid>
            {!!prevArticle?.slug && (
                <SuggestedArticle
                    title={prevArticle?.title}
                    category={prevArticle?.category}
                    excerpt={prevArticle?.excerpt}
                    publishedAt={prevArticle?.publishedAt}
                    slug={prevArticle?.slug}
                    key={prevArticle?.title}
                    direction={"left"}
                />
            )}
            {!!nextArticle?.slug && (
                <SuggestedArticle
                    category={nextArticle?.category}
                    title={nextArticle?.title}
                    excerpt={nextArticle?.excerpt}
                    publishedAt={nextArticle?.publishedAt}
                    slug={nextArticle?.slug}
                    key={nextArticle?.title}
                    direction={"right"}
                />
            )}
        </ArticleGrid>
    );
};
