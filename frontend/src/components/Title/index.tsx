import { Typography } from "@mui/material";

export const Title = ({
    children,
    variant = "h3",
    component = "h1",
    className = "title",
    fontWeight = "800",
    mb = 5,
}: any): JSX.Element => {
    return (
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
};
