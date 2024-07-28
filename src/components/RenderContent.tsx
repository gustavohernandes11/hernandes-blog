import { ILexicalContent } from "types/ILexicalContent";
import { serializeLexical } from "utils/serializeLexical";

type RenderContentProps = {
    content: ILexicalContent;
};

export const RenderContent = ({ content }: RenderContentProps) => {
    return (
        <div
            style={{
                fontSize: "1.2rem",
            }}
        >
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
