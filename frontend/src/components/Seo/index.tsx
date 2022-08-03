import Head from "next/head";

export const Seo = () => {
    let meta_description, meta_title, meta_keywords;

    return (
        <Head>
            <meta name="title" content={meta_title} />
            <meta name="rating" content="general" />
            <meta name="og:description" content={meta_description} />
            <meta name="keywords" content={meta_keywords} />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="revisit-after" content="3 days" />
            <meta name="author" content="Gustavo Hernandes" />
        </Head>
    );
};
