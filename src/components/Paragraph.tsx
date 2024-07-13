type ParagraphProps = {
    children: React.ReactNode;
};
export const Paragraph = ({ children, ...props }: ParagraphProps) => {
    return (
        <p
            style={{
                fontSize: "1.2rem",
            }}
            {...props}
        >
            {children}
        </p>
    );
};
