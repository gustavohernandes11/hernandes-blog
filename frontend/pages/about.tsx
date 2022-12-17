import { SocialBar } from "components/SocialBar";
import type { NextPage } from "next";
import { ImageContainer } from "components/ImageContainer";
import SkyImage from "../src/assets/imgs/Sky.png";
import { useScreen } from "hooks/useScreen";
import { useState } from "react";
import { getAbout } from "services/getabout";
import { MarkDownContent } from "components/MarkDownContent";
import { Title } from "components/Title";

const About: NextPage = ({ data }: any) => {
    const [aboutmeContent] = useState(data);
    const { isTablet } = useScreen();
    return (
        <>
            {!isTablet && (
                <ImageContainer
                    content={<Title>Sobre o autor</Title>}
                    src={SkyImage}
                    alt={"Imagem de uma paisagem"}
                />
            )}

            <div className="post-wrapper-content">
                <MarkDownContent>{aboutmeContent}</MarkDownContent>
                {!!isTablet && <SocialBar />}
            </div>
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
