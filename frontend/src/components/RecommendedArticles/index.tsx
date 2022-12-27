import { ArticleGrid } from "./ArticleGrid";
import { SuggestedArticle } from "./SuggestedArticle";

export type ArticleProps = {
    title: string;
    excerpt: string;
    category: {
        name: string;
        color: string;
    };
    date: string;
    slug: string;
    direction?: "left" | "right";
};

type RecommendedArticlesProps = {
    items: ArticleProps[];
};

export const RecommendedArticles = ({ items }: RecommendedArticlesProps) => {
    return (
        <ArticleGrid>
            {items.map((article, i) => {
                return (
                    <SuggestedArticle
                        category={article.category}
                        title={article.title}
                        excerpt={article.excerpt}
                        date={article.date}
                        slug={article.slug}
                        key={article.title}
                        direction={i === 1 ? "right" : "left"}
                    />
                );
            })}
        </ArticleGrid>
    );
};
