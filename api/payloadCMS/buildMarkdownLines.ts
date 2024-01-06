export const buildMarkdownLines = (nestedObject: any[]): string => {
    let markdownLines = "";
    nestedObject.map((node) => {
        if (node.type === "upload") {
            markdownLines += "\n";
            markdownLines += `![${node.value.alt}](${node.value.url})`;
        }
        node.children?.map((children: any) => {
            if (children.type === "link") {
                if (children.newTab)
                    markdownLines += `<a href="${children.url}" target="_blank">${children.children[0].text}</a>`;
                else
                    markdownLines += `[${children.children[0].text}](${children.url})`;
            } else {
                markdownLines += children.text;
            }
        });
        markdownLines += "\n";
    });
    return markdownLines;
};
