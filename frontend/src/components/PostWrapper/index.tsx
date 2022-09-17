import * as Styled from "./styles.js";
import Link from "next/link";

interface PostWrapperProps {
    children: React.ReactNode;
    slug: string;
}

export const PostWrapper = ({ children, slug }: PostWrapperProps) => {
    return (
        <Link aria-label="post-wrapper-link" href={`/posts/${slug}`}>
            <Styled.Wrapper aria-label="post-wrapper">
                {children}
            </Styled.Wrapper>
        </Link>
    );
};
