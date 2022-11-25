import { Image } from "components/Image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import * as S from "./styles";

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
        <S.Container {...props}>
            <a href={`/posts/${slug}/`}>
                <Image
                    alt={imageAlt}
                    src={imageSrc}
                    width={imageWidth}
                    height={imageHeight}
                />
                <div className="card-content">
                    <header>
                        <strong>{title}</strong>
                        <p>{excerpt}</p>
                    </header>
                    <footer>
                        <p className="category">{category}</p>
                        <time>{date}</time>
                    </footer>
                </div>
            </a>
        </S.Container>
    );
};
