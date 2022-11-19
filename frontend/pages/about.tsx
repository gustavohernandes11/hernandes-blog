import { SocialBar } from "components/SocialBar";
import { Heading } from "components/Heading";
import { GoBackButton } from "components/_mobile/GoBackButton";
import type { NextPage } from "next";
import { ImageContainer } from "components/ImageContainer";
import SkyImage from '../src/assets/imgs/Sky.png'
import { useScreen } from "hooks/useScreen";
import { AuthorProfile } from "components/AuthorProfile";
import { useState } from "react";
import { getAbout } from "services/getabout";
import { MarkDownContent } from "components/MarkDownContent";

const About: NextPage = ({ data }: any) => {
    const [aboutmeContent] = useState(data)
    const { isTablet } = useScreen()
    return (
        <>

            {!isTablet && <ImageContainer content={<Heading>Sobre o autor</Heading>} src={SkyImage} alt={"Imagem de uma paisagem"} />}
            {isTablet && <AuthorProfile />}
            <div className="post-wrapper-content">
                {isTablet && <GoBackButton />}
                <MarkDownContent>{aboutmeContent}</MarkDownContent>
                {isTablet && <SocialBar />}
            </div>
        </>
    );
};

export default About;


export async function getStaticProps() {
    const data = await getAbout()


    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data }
    };
}

