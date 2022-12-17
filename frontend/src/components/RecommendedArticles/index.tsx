import { Article } from "components/Article";
import { SliderComponent } from "components/_mobile/Slider";
import { ArticleData } from "services/articles";
import { useRouter } from "next/router";
import { Container, Grid, Text } from "@chakra-ui/react";

type RecommendedArticlesProps = {
    items: ArticleData[];
};

export const RecommendedArticles = ({ items }: RecommendedArticlesProps) => {
    const router = useRouter();

    const filteredItems = items.filter((e) => e.slug !== router.query.slug);

    return <></>;
};

const ArticleGrid = ({ children }: any) => {
    return (
        <Grid gap="0.5rem" templateColumns={"1fr 1fr 1fr"} margin="1rem 0">
            {children}
        </Grid>
    );
};
