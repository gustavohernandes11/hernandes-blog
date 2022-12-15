import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { Aside } from "layout/Aside";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
    return (
        <Grid
            w="100%"
            maxW="100vw"
            h="100%"
            maxH="100vh"
            overflow="hidden"
            gridTemplateColumns={{ lg: "300px 1fr", base: "1fr" }}
            gridTemplateAreas={{ lg: `"aside main"`, base: `"aside" "main"` }}
        >
            <GridItem area="main" overflowY="auto">
                <GridItem area="header">
                    <Header />
                </GridItem>
                {children}
                <GridItem area="footer">
                    <Footer />
                </GridItem>
            </GridItem>
            <GridItem area="aside">
                <Aside />
            </GridItem>
        </Grid>
    );
};
