import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "@styled-icons/heroicons-solid";
import Image from "next/image";
import defaultImage from "../../src/assets/imgs/default-image-programmer.jpg";
import { Content } from "../../src/components/Content";
import { MobileHeader } from "../../src/components/MobileHeader";
import { Logo } from "../../src/components/Logo";
import { PostDate } from "../../src/components/PostDate";
import { Title } from "../../src/components/Title";
import { Seo } from "../../src/components/Seo";
import { PostDescription } from "../../src/components/PostDescription";
import { MarkDownContent } from "components/MarkDownContent";
import { Footer } from "components/Footer";
import { loadPosts } from "../../src/api/loadPosts";
import { Button, Grid } from "@mui/material";
import { ImageWrapper } from "components/ImageWrapper";
import { getDate } from "../../src/utils/handlingFunctions";
import { Post as IPost } from "../../src/utils/commonTypes";

type ArticlePageProps = {
    data: IPost;
};

const Post = ({ data }: ArticlePageProps) => {
    const router = useRouter();
    const [post] = useState(data);

    return (
        <>
            <MobileHeader>
                <Logo size="small" />
            </MobileHeader>
            <Content>
                <Seo
                    title={post?.attributes?.Meta?.Title}
                    description={post?.attributes?.Meta?.Description}
                    keywords={post?.attributes?.Meta?.Keywords}
                />
                <Grid container justifyContent="space-between">
                    <Button
                        startIcon={<ArrowLeft height={12} width={12} />}
                        size="small"
                        variant="text"
                        onClick={() => router.back()}
                    >
                        Voltar
                    </Button>
                    <PostDate>{getDate(post?.attributes?.publishedAt)}</PostDate>
                </Grid>
                <ImageWrapper>
                    <Image
                        loader={({ src, width }) => `${src}?w=${width}`}
                        src={
                            post?.attributes?.Cape?.data?.attributes?.url ||
                            defaultImage
                        }
                        height={
                            post?.attributes?.Cape?.data?.attributes?.height || 720
                        }
                        width={
                            post?.attributes?.Cape?.data?.attributes?.width || 1200
                        }
                        layout="intrinsic"
                    />
                </ImageWrapper>
                <Title>{post?.attributes?.Title}</Title>
                <PostDescription>{post?.attributes?.Excerpt}</PostDescription>

                <MarkDownContent>{post?.attributes?.Content}</MarkDownContent>
                <Footer />
            </Content>
        </>
    );
};

export async function getStaticPaths() {
    const data = await loadPosts();

    const paths = data.map((e: IPost) => {
        return {
            params: { slug: e.attributes.Slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const data = await loadPosts({ postSlug: params.slug }).then((d) => d[0]);

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
    };
}

export default Post;
