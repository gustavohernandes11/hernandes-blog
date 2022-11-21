import { Container } from "components/Container";
import { Heading } from "components/Heading";
import { Title } from "components/Title";
import { Header } from "components/_mobile/Header";
import { useScreen } from "hooks/useScreen";
import type { NextPage } from "next";

const PostsPage: NextPage = (): JSX.Element => {
    const { isTablet } = useScreen()
    return (
        <>
            <title>Hernandes | Blog de desenvolvimento web</title>
            {isTablet && <Header goBackButton={false} />}
            <main style={{
                width: "100%",
                height: "auto",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "4rem 0",
            }}>
                <h1>Redirecting...</h1>
            </main>
        </>
    );
};

export default PostsPage;
