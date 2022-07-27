import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";
import * as Styled from "./styles.js";
import { Heading } from "../Heading";
import { PostTitle } from "../PostTitle";
import { PostSubtitle } from "../PostSubtitle";
import { Code } from "../Code";
import { Typography } from "@mui/material";


export const RenderContentZone = ({ content = [] }: any): JSX.Element => {
    interface ComponentType {
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
            {content.map((el: ComponentType) => {
                if (el.__component === 'post.paragraphy') {return <Typography mb={3}>{el.paragraphy}</Typography>}
                if (el.__component === 'post.subtitle') {return <Heading >{el.subtitle}</Heading>}
                if (el.__component === 'post.code') {return <Code >{el.code}</Code>}
                <p key={el.id}>{el.__component}</p>;
            })}
        </>
    );
};
