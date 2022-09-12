import { useState } from "react";

import { Content } from "../../src/components/Content";
import { PostDate } from "./../../src/components/PostWrapper/PostDate/";
import { Title } from "../../src/components/Title";
import { Seo } from "../../src/components/Seo";
import { PostDescription } from "./../../src/components/PostWrapper/PostDescription/";
import { MarkDownContent } from "components/MarkDownContent";
import { Footer } from "components/Footer";

const Post = () => {
    const [post] = useState();

    return (
        <Content>
            <Seo />

            <PostDate>123/123/123</PostDate>
            <Title>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Title>
            <PostDescription>
                Cum veniam soluta provident cumque quibusdam omnis neque nobis,
                ipsam distinctio consectetur consequuntur, voluptas repudiandae
                deserunt dolor voluptates sint possimus, ratione sequi?
            </PostDescription>

            <MarkDownContent>
                ### Cum veniam soluta provident
                
                 cumque quibusdam omnis neque
                nobis, ipsam distinctio consectetur consequuntur, voluptas
                repudiandae deserunt dolor voluptates sint possimus, ratione
                sequi? Cum veniam soluta provident cumque quibusdam omnis neque
                nobis

                ### ipsam distinctio consectetur consequuntur

                voluptas
                repudiandae deserunt dolor voluptates sint possimus, ratione
                sequi? Cum veniam soluta provident cumque quibusdam omnis neque
                nobis, ipsam distinctio consectetur consequuntur, voluptas
                repudiandae deserunt dolor voluptates sint possimus, ratione
                sequi?
            </MarkDownContent>
            <Footer />
        </Content>
    );
};

// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:1337/api/posts`);
//     const { data } = await res.json();

//     const paths = data.map((post: { attributes: { slug: string } }) => {
//         return {
//             params: { postSlug: post.attributes.slug },
//         };
//     });
//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }: any) {
//     // getting the id using the slug
//     const res = await fetch(
//         `http://localhost:1337/api/posts?filters[slug]=${params.postSlug}`
//     );
//     const { data: prevData } = await res.json();
//     const id = prevData[0].id;

//     // getting the data using the id
//     const postRes = await fetch(`
//     http://localhost:1337/api/posts/${id}?populate=deep
//     `);
//     const { data } = await postRes.json();

//     if (!data) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: { data },
//         revalidate: 180,
//     };
// }

export default Post;
