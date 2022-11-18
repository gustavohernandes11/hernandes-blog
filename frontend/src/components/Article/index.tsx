import Link from 'next/link'
import * as S from './styles'

type ArticleProps = {
    categoryInitial: string;
    title: string;
    excerpt: string;
    readingTime: string | number;
    date: string | number;
    color: string;
    vertical?: boolean;
    slug: string;
}

export const Article = ({ categoryInitial, title, excerpt, readingTime, date, color, vertical = false, slug }: ArticleProps) => {
    const props = {
        vertical: vertical,
        color: color,
    }
    return (
        <S.Container {...props}>
            <Link href={`/posts/${slug}`}>
                <span className='category'>{categoryInitial}</span>
                <header>
                    <strong>{title}</strong>
                    <p>{excerpt}</p>
                </header>
                <footer>
                    <p>
                        {readingTime}
                    </p>
                    <time>{date}</time>
                </footer>

            </Link>
        </S.Container>
    )
}
