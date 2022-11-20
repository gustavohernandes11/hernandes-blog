import { Image } from 'components/Image';
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import * as S from './styles'

type ArticleProps = {
    categoryInitial: string;
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
}

export const Article = ({
    categoryInitial,
    title,
    excerpt,
    readingTime,
    date,
    color,
    slug,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt
}: ArticleProps) => {
    const props = {
        color: color
    }
    return (
        <S.Container {...props}>
            <Link href={`/posts/${slug}`}>
                <Image alt={imageAlt} src={imageSrc} width={imageWidth} height={imageHeight} />
                <main className="card-content">
                    <header>
                        <strong>{title}</strong>
                        <p>{excerpt}</p>
                    </header>
                    <footer>
                        <p className="category">{categoryInitial}</p>
                        <time>{date}</time>
                    </footer>
                </main>

            </Link>
        </S.Container>
    )
}
