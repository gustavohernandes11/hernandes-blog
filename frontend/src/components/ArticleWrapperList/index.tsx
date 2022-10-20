import { Grid } from "@mui/material";
type ArticleWrapperListType = {
    children?: React.ReactNode[] | React.ReactNode;
};

export const ArticleWrapperList = ({ children }: ArticleWrapperListType) => {
    return (
        <Grid container direction="row" xs={12}>
            {children}
        </Grid>
    );
};
