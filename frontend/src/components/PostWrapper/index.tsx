import * as Styled from "./styles.js";
import Link from "next/link";

interface PostWrapperProps {
    children: any;
    slug: string;
}

export const PostWrapper = ({ children, slug }: PostWrapperProps) => {
    return (
        <Link href={`/posts/${slug}`}>
            <Styled.Wrapper>{children}</Styled.Wrapper>
        </Link>
    );
};
