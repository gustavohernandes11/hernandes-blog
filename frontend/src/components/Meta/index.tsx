import Head from "next/head";

interface MetaType {
    title?: string | undefined;
    description?: string | null | undefined;
    keywords?: string | null | undefined;
}

export const Meta = ({
    title,
    keywords,
    description,
}: MetaType) => {
    return (
        <Head>
            <>
                <meta name="title" content={title} />
                <title>{title}</title>
            </>

            <meta name="rating" content="general" />
            {description && (
                <meta name="og:description" content={description} />
            )}
            {keywords && <meta name="keywords" content={keywords} />}
        </Head>
    );
};
