import type { NextPage } from "next";
import { useState } from "react";
import { getAbout } from "strapi-api/getAbout";
import { MarkDownContent } from "components/MarkDownContent";
import { Container, Flex } from "@chakra-ui/react";

const About: NextPage = ({ data }: any) => {
    const [aboutmeContent] = useState(data);

    return (
        <>
            <title>Hernandes | Sobre</title>
            <Container size="lg" as="article" maxW="50rem">
                <Flex
                    m="2rem"
                    minH="100%"
                    flexDirection="column"
                    bgColor="background"
                    as="section"
                >
                    <div className="post-wrapper-content">
                        <MarkDownContent>{aboutmeContent}</MarkDownContent>
                    </div>
                </Flex>
            </Container>
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
