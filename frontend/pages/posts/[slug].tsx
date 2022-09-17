import { useState } from "react";
import { useRouter } from 'next/router'
import { ArrowLeft } from "@styled-icons/heroicons-solid";
import Image from "next/image";
import { Content } from "../../src/components/Content";
import { PostDate } from "../../src/components/PostWrapper/PostDate";
import { Title } from "../../src/components/Title";
import { Seo } from "../../src/components/Seo";
import { PostDescription } from "../../src/components/PostWrapper/PostDescription";
import { MarkDownContent } from "components/MarkDownContent";
import { Footer } from "components/Footer";
import { loadPosts } from "../../src/api/loadPosts";
import { Button } from "@mui/material";
import { ImageWrapper } from "components/ImageWrapper";
import { Header } from "components/Header";
import { getDate } from '../../src/utils/handlingFunctions'

const Post = ({ data = {} }: any) => {
    const router = useRouter()
    const [post] = useState(data);

    return (
        <Content>
            <Seo />
            <Header>
                <Button
                    startIcon={<ArrowLeft height={12} width={12} />}
                    size="small"
                    variant="text"
                    onClick={() => router.back()}
                >
                    Voltar
                </Button>
            <PostDate>{getDate(post?.attributes?.publishedAt)}</PostDate>
            </Header>
            <ImageWrapper>
                <Image
                    src={post?.attributes.Cape?.data?.attributes?.url}
                    height={
                        post?.attributes.Cape?.data?.attributes?.heigth || 720
                    }
                    width={
                        post?.attributes.Cape?.data?.attributes?.width || 1200
                    }
                    layout="intrinsic"
                />
            </ImageWrapper>
            <Title>{post?.attributes?.Title}</Title>
            <PostDescription>{post?.attributes?.Excerpt}</PostDescription>

            <MarkDownContent>{post?.attributes?.Content}</MarkDownContent>
            <Footer />
        </Content>
    );
};

export async function getStaticPaths() {
    const data = await loadPosts();

    const paths = data.map((e: any) => {
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
    const data = await loadPosts({ postSlug: params.slug }).then(
        (d: object[]) => d[0]
    );
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
