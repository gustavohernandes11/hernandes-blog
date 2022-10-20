import { Grid } from "@mui/material";
import * as Styled from "./styles";

import { ArticleModalFooter } from "./ArticleModalFooter";

import Image from "next/image";
import Link from "next/link";
import { PostDescription } from "../PostDescription/index";
import { PostTitle } from "../PostTitle/index";
import { getDate } from "../../utils/handlingFunctions";
import { Post } from "../../utils/commonTypes";
type ArticleModalType = {
    element: Post;
    key?: string | number;
};
export const ArticleModal = ({ element, key }: ArticleModalType) => {
    return (
        <Grid key={key} p={1} container xs={12} md={6} xl={4}>
            <Link href={`/posts/${element.attributes.Slug}`}>
                <Styled.Card>
                    <Styled.ImageWrapper>
                        <Image
                            loader={({ src, width, quality = 75 }) =>
                                `${src}?w=${width}`
                            }
                            src={
                                element?.attributes.Cape?.data?.attributes?.url
                            }
                            height={
                                element?.attributes.Cape?.data?.attributes
                                    ?.height || 720
                            }
                            width={
                                element?.attributes.Cape?.data?.attributes
                                    ?.width || 1200
                            }
                            layout="intrinsic"
                        />
                    </Styled.ImageWrapper>
                    <Styled.Content>
                        <Styled.ModalHeader>
                            <PostTitle>{element.attributes.Title}</PostTitle>
                            <PostDescription>
                                {element.attributes.Excerpt}
                            </PostDescription>
                        </Styled.ModalHeader>
                        <ArticleModalFooter
                            articleCategory={element.attributes.Category}
                            articleDate={getDate(
                                element?.attributes.publishedAt
                            )}
                        />
                    </Styled.Content>
                </Styled.Card>
            </Link>
        </Grid>
    );
};
