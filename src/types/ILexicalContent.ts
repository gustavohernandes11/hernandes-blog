import { SerializedLexicalNode } from "lexical";

export type ILexicalContent = {
    root: {
        type: string;
        format: string;
        indent: number;
        version: number;
        children: SerializedLexicalNode[];
        direction: string;
    };
};
