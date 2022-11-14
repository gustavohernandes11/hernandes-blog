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
}

export const Article = ({ categoryInitial, title, excerpt, readingTime, date, color, vertical = false }: ArticleProps) => {
    const props = {
        vertical: vertical,
        color: color,
    }
    return (
        <S.Container {...props}>
            <Link href="/">
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
