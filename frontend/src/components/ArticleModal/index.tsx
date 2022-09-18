import {
    Grid,
    Card,
    CardActionArea,
    CardHeader,
    CardMedia,
    CardContent,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
                <Card
                    component={motion.article}
                    whileHover={{ scale: 1.01 }}
                    elevation={8}
                    color="inherit"
                >
                    <CardActionArea sx={{ heigth: "100%" }}>
                        <CardHeader
                            action={getDate(element?.attributes.publishedAt)}
                        />
                        <CardMedia>
                            <Image
                                loader={({ src, width, quality = 75 }) =>
                                    `${src}?w=${width}`
                                }
                                src={
                                    element?.attributes.Cape?.data?.attributes
                                        ?.url
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
                        </CardMedia>
                        <CardContent>
                            <PostTitle>{element.attributes.Title}</PostTitle>
                            <PostDescription>
                                {element.attributes.Excerpt}
                            </PostDescription>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
};
