import { Article } from "components/Article";
import { SliderComponent } from "components/_mobile/Slider";
import { useScreen } from "hooks/useScreen";
import { ArticleData } from "services/articles";
import { useRouter } from "next/router";
import * as S from "./styles";
import { Heading } from "components/Heading";

type RecommendedArticlesProps = {
    items: ArticleData[];
};

export const RecommendedArticles = ({ items }: RecommendedArticlesProps) => {
    const router = useRouter();
    const { isTablet } = useScreen();

    const filteredItems = items.filter((e) => e.slug !== router.query.slug);

    return (
        <>
            {filteredItems.length > 0 && (
                <>
                    <Heading as="h1" size="medium" align="center">
                        Recomendações
                    </Heading>
                    <S.Container>
                        {!!isTablet ? (
                            <SliderComponent items={filteredItems} />
                        ) : (
                            <S.Grid className="recommended-grid">
                                {filteredItems.map((e: any) => {
                                    return (
                                        <Article
                                            imageSrc={e.hero.url}
                                            imageHeight={e.hero.height}
                                            imageWidth={e.hero.width}
                                            imageAlt={e.hero.alternativeText}
                                            slug={e.slug}
                                            category={e.category.name}
                                            title={e.title}
                                            color={e.category.color}
                                            date={e.publishedAt}
                                            excerpt={e.excerpt}
                                            key={e.slug}
                                        />
                                    );
                                })}
                            </S.Grid>
                        )}
                    </S.Container>
                </>
            )}
        </>
    );
};
