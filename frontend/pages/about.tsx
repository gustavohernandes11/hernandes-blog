import type { NextPage } from "next";
import { useState } from "react";
import { getAbout } from "strapi-api/getAbout";
import { MarkDownContent } from "components/MarkDownContent";

const About: NextPage = ({ data }: any) => {
    const [aboutmeContent] = useState(data);

    return (
        <>
            <title>Hernandes | Sobre</title>
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
