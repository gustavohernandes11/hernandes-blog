import { SerializedLexicalNode } from "lexical";
import { serializeLexical } from "utils/serializeLexical";

type RenderContentProps = {
    content: {
        root: {
            type: string;
            format: string;
            indent: number;
            version: number;
            children: SerializedLexicalNode[];
            direction: string;
        };
    };
};

export const RenderContent = ({ content }: RenderContentProps) => {
    return (
        <div>
            {content &&
                !Array.isArray(content) &&
                typeof content === "object" &&
                "root" in content &&
                serializeLexical({
                    nodes: content?.root?.children,
                })}
        </div>
    );
};
