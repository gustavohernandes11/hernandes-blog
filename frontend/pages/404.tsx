import { Container } from "components/Container";
import { Heading } from "components/Heading";
import { Title } from "components/Title";
import { Header } from "components/_mobile/Header";
import { useScreen } from "hooks/useScreen";
import type { NextPage } from "next";

const Error404: NextPage = (): JSX.Element => {
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
                <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0, }}>404</h1>
                <p>Página não encontrada</p>
            </main>
        </>
    );
};

export default Error404;
