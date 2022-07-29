import { Content } from "../src/components/Content";
import { Title } from "../src/components/Title";
import { Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

import type { NextPage } from "next";
import Head from "next/head";

const Error404: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <Content nofooter>
                <Stack
                    alignSelf="center"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    m="auto"
                    spacing={2}
                >
                    <Title variant="h1" mb={2}>
                        404
                    </Title>
                    <Typography>
                        A página que você procura não foi encontrada.
                    </Typography>
                    <Link href="/" className="go-home-button" aria-label="go-home-button">
                        <Button variant="contained" >Voltar para home</Button>
                    </Link>
                </Stack>
            </Content>
        </>
    );
};

export default Error404;
