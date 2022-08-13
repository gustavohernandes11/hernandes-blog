import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";
import Image from "next/image";
import { Heading } from "../Heading";
import { ImageWrapper } from "../ImageWrapper";
import { CodeContainer } from "../CodeContainer";
import { BlockQuote } from "../BlockQuote";
import ReactMarkdown from "react-markdown";

export const RenderContentZone = ({ content = [] }: any): JSX.Element => {
    interface ComponentType {
        subtitle_h3: string;
        alt: string;
        image: any;
        paragraphy: string;
        subtitle: string;
        code: string;
        id: Key | null | undefined;
        __component:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
    }

    return (
        <>
            {content?.map((el: ComponentType) => {
                if (el.__component === "post.paragraphy") {
                    return (
                        <ReactMarkdown
                            components={{
                                h1: Heading,
                                pre: CodeContainer,
                                image: ImageWrapper,
                                blockquote: BlockQuote,
                            }}
                        >
                            {el.paragraphy}
                        </ReactMarkdown>
                    );
                }
                // if (el.__component === "post.subtitle") {
                //     return <Heading as="h2">{el.subtitle}</Heading>;
                // }
                // if (el.__component === "post.subtitle-h3") {
                //     return <Heading as="h3">{el.subtitle_h3}</Heading>;
                // }
                // if (el.__component === "post.code") {
                //     return <CodeContainer>{el.code}</CodeContainer>;
                // }
                // if (el.__component === "post.image") {
                //     return (
                //         <ImageWrapper>
                //             <Image
                //                 width={el.image.data.attributes.width}
                //                 height={el.image.data.attributes.height}
                //                 alt={el.alt}
                //                 src={el.image.data.attributes.url}
                //             />
                //         </ImageWrapper>
                //     );
                // }
            })}
        </>
    );
};
