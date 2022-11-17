import { SocialBar } from "components/SocialBar";
import { Heading } from "components/Heading";
import { GoBackButton } from "components/_mobile/GoBackButton";
import type { NextPage } from "next";
import { ImageContainer } from "components/ImageContainer";
import SkyImage from '../src/assets/imgs/Sky.png'
import { useScreen } from "hooks/useScreen";
import { AuthorProfile } from "components/AuthorProfile";

const About: NextPage = () => {
    const { isTablet } = useScreen()
    return (
        <>

            {!isTablet && <ImageContainer content={<Heading>Sobre o autor</Heading>} src={SkyImage} alt={"Imagem de uma paisagem"} />}
            {isTablet && <AuthorProfile />}
            <div className="post-wrapper-content">
                {isTablet && <GoBackButton />}
                <Heading as="h2">Lorem</Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste reprehenderit molestiae modi delectus, minima culpa consectetur quae cumque? Nostrum magni delectus consectetur quam corporis deleniti voluptatibus, quia quo deserunt!</p>
                <Heading as="h2">Lorem</Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste reprehenderit molestiae modi delectus, minima culpa consectetur quae cumque? Nostrum magni delectus consectetur quam corporis deleniti voluptatibus, quia quo deserunt!</p>
                {isTablet && <SocialBar />}
            </div>
        </>
    );
};

export default About;
