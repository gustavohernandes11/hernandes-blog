import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";

type ArticleProps = {
    category: string;
    title: string;
    excerpt: string;
    readingTime?: string | number;
    date: string | number;
    color: string;
    slug: string;
    imageSrc: string | StaticImageData;
    imageHeight: number;
    imageWidth: number;
    imageAlt: string;
};

export const Article = ({
    category,
    title,
    excerpt,
    date,
    color,
    slug,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
}: ArticleProps) => {
    const props = {
        color: color,
    };
    return (
        <Link href={`/posts/${slug}/`} legacyBehavior passHref={true}>
            <Wrapper>
                <ArticleTitle>{title}</ArticleTitle>
                <Acronym color={color}>{category.slice(0, 4)}</Acronym>
            </Wrapper>
        </Link>
    );
};
const Acronym = styled.abbr`
    color: #a1a1a1;
    font-weight: 500;
`;
const Wrapper = styled.article`
    font-family: ${(props) => props.theme.primaryFontFamily};
    padding: 1rem;
    background-color: #1a1a1a;
    border-radius: 0.5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 3rem;

    :hover {
        cursor: pointer;
        background-color: #2e2e2e;
        abbr {
            color: #856abd;
        }
    }
`;
const ArticleTitle = styled.h1``;
