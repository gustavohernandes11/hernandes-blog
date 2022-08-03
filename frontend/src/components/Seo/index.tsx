import { useEffect, useState } from "react";
import Head from "next/head";

interface MetaType {
    meta_title: string | null | undefined;
    meta_description: string | null | undefined;
    meta_keywords: string | null | undefined;
}

export const Seo = ({ metadata = {} }: any) => {
    const [metaState] = useState(metadata);
    return (
        <Head>
            {metaState.meta_title && (
                <>
                    <meta name="title" content={metaState.meta_title} />
                    <title>{metaState.meta_title}</title>
                </>
            )}

            <meta name="rating" content="general" />
            {metaState.meta_description && (
                <meta
                    name="og:description"
                    content={metaState.meta_description}
                />
            )}
            {metaState.meta_keywords && (
                <meta name="keywords" content={metaState.meta_keywords} />
            )}
        </Head>
    );
};
