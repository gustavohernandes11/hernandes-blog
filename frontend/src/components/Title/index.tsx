import { Typography } from "@mui/material";

interface TitleType {
    children: React.ReactNode;
    variant?: any;
    component?: any;
    className?: string;
    fontWeight?: string | number;
    mb?: any;
}

export const Title = ({
    children,
    variant = "h2",
    component = "h1",
    className = "title",
    fontWeight = "800",
    mb = 2,
}: TitleType): JSX.Element => (
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
