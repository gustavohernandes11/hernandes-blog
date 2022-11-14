import { SocialBar } from "components/SocialBar";
import { Heading } from "components/Heading";
import { GoBackButton } from "components/GoBackButton";
import { AuthorProfile } from "components/AuthorProfile";
import type { NextPage } from "next";


const About: NextPage = () => {
    return (
        <div className="margin">
            <GoBackButton />
            <AuthorProfile />
            <SocialBar />
            <Heading>Sobre</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste reprehenderit molestiae modi delectus, minima culpa consectetur quae cumque? Nostrum magni delectus consectetur quam corporis deleniti voluptatibus, quia quo deserunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste reprehenderit molestiae modi delectus, minima culpa consectetur quae cumque? Nostrum magni delectus consectetur quam corporis deleniti voluptatibus, quia quo deserunt!</p>
        </div>
    );
};

export default About;
