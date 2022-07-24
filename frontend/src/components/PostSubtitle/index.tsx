import { Typography } from "@mui/material";

export const PostSubtitle = ({ children }: any) => {
    return (
        <Typography
            variant="subtitle1"
            component="h2"
            className="post-subtitle"
            mb={5}
        >
            {children}
        </Typography>
    );
};
