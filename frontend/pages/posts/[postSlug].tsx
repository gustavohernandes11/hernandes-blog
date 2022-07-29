// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useState } from "react";
import { Content } from "../../src/components/Content";
import { PostDate } from "./../../src/components/PostWrapper/PostDate/";
import { PostTitle } from "./../../src/components/PostTitle/";
import { PostDescription } from "./../../src/components/PostWrapper/PostDescription/";
import { RenderContentZone } from "components/RenderContentZone";

const Post = ({ data = {} }: any) => {
    const [post, setPost] = useState(data);

    return (
        <Content>
            <PostDate>{post.attributes.date}</PostDate>
            <PostTitle>{post.attributes.title}</PostTitle>
            <PostDescription>
                {post.attributes.Post_description}
            </PostDescription>

            <RenderContentZone content={post.attributes.post_content_zone} />
        </Content>
    );
};

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:1337/api/posts`);
    const { data } = await res.json();

    const paths = data.map((post: { attributes: { slug: string } }) => {
        return {
            params: { postSlug: post.attributes.slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    // getting the id using the slug
    const res = await fetch(
        `http://localhost:1337/api/posts?filters[slug]=${params.postSlug}`
    );
    const { data: prevData } = await res.json();
    const id = prevData[0].id;

    // getting the data using the id
    const postRes = await fetch(`
    http://localhost:1337/api/posts/${id}?populate[post_content_zone][populate]=*
    `);
    const { data } = await postRes.json();

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
        revalidate: 180,
    };
}

export default Post;
