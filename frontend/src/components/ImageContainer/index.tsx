import Image, { ImageProps } from 'next/image'
import * as S from './styles'

type ImageContainerProps = {
    content: React.ReactNode
}
export const ImageContainer = ({ alt, src, content }: ImageContainerProps & ImageProps) => {
    return (
        <S.Container>
            <Image alt={alt} src={src} />
            <p>{content}</p>
        </S.Container>
    )
}
