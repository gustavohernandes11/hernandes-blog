import Link from 'next/link'
import * as S from './styles'

type ArticleProps = {
    categoryInitial: string;
    title: string;
    excerpt: string;
    readingTime: string | number;
    date: string | number;
    color: string;
}

export const Article = ({ categoryInitial, title, excerpt, readingTime, date, color }: ArticleProps) => {
    return (
        <S.Container color={color}>
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
