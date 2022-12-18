import type { NextPage } from "next";
import { useState } from "react";
import { getAbout } from "services/getabout";
import { MarkDownContent } from "components/MarkDownContent";
import { Flex } from "@chakra-ui/react";

const About: NextPage = ({ data }: any) => {
    const [aboutmeContent] = useState(data);
    return (
        <>
            <title>Hernandes | Sobre</title>
            <Flex m="2rem" minH="100%" flexDirection="column" as="section">
                <div className="post-wrapper-content">
                    <MarkDownContent>{aboutmeContent}</MarkDownContent>
                </div>
            </Flex>
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
