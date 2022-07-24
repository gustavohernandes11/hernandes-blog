import { Typography } from "@mui/material";

export const PostTitle = ({ children }: any) => {
    return (
        <Typography
            variant="h3"
            component="h1"
            className="post-title"
            fontWeight="bold"
            mb={5}
        >
            {children}
        </Typography>
    );
};
