import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta name="language" content="Portuguese" />
                    <meta name="revisit-after" content="3 days" />
                    <meta name="author" content="Gustavo Hernandes" />
                    <meta name="robots" content="index, follow" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="30x30"
                        href="/FavIcon.svg"
                    ></link>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
