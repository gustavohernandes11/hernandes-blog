import * as S from './styles'
import { StaticImageData } from 'next/image'

type CapeProps = {
    alt: string;
    src: string | StaticImageData;
    cape?: boolean;

}
export const Image = ({ alt, src, cape }: CapeProps) => {
    const props = {
        cape: cape
    }
    return (
        <S.Container {...props}>
            <S.StyledImage alt={alt} src={src} />
        </S.Container>
    )
}
