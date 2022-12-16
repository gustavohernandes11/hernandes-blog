import { Article } from "components/Article";
import { SliderComponent } from "components/_mobile/Slider";
import { useScreen } from "hooks/useScreen";
import { ArticleData } from "services/articles";
import { useRouter } from "next/router";
import { Container, Grid, Text } from "@chakra-ui/react";

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
                    <Text as="h1" size="medium" align="center">
                        Recomendações
                    </Text>
                    <Container m="1rem">
                        {!!isTablet ? (
                            <SliderComponent items={filteredItems} />
                        ) : (
                            <ArticleGrid>
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
                            </ArticleGrid>
                        )}
                    </Container>
                </>
            )}
        </>
    );
};

const ArticleGrid = ({ children }: any) => {
    return (
        <Grid gap="0.5rem" templateColumns={"1fr 1fr 1fr"} margin="1rem 0">
            {children}
        </Grid>
    );
};
