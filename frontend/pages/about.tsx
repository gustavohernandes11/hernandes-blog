import type { NextPage } from "next";
import { useState } from "react";
import { getAbout } from "strapi-api/getAbout";
import { MarkDownContent } from "components/MarkDownContent";
import { Meta } from "components/Meta";

const About: NextPage = ({ data }: any) => {
    const [aboutmeContent] = useState(data);

    return (
        <>
            <Meta
                description="Blog de desenvolvimento e outras coisas mais."
                key="default"
                keywords="tecnologia, engenharia, web, javascript, html, css"
                title="undefined | Home"
            />
            <article>
                <div>
                    <div className="post-wrapper-content">
                        <MarkDownContent>{aboutmeContent}</MarkDownContent>
                    </div>
                </div>
            </article>
        </>
    );
};

export default About;

export async function getStaticProps() {
    const data = await getAbout();

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
    };
}
