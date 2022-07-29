import { Typography } from "@mui/material";

export const Title = ({
    children,
    variant = "h3",
    component = "h1",
    className = "title",
    fontWeight = "bold",
    mb = 5,
}: any) => (
    <Typography
        variant={variant}
        component={component}
        className={className}
        fontWeight={fontWeight}
        mb={mb}
    >
        {children}
    </Typography>
);
