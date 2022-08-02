import { Typography } from "@mui/material";

export const Title = ({
    children,
    variant = "h4",
    component = "h1",
    className = "title",
    fontWeight = "800",
    mb = 5,
}: any): JSX.Element => (
    <Typography
        component={component}
        className={className}
        fontWeight={fontWeight}
        mb={mb}
        variant={variant}
    >
        {children}
    </Typography>
);
