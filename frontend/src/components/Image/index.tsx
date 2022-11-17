import * as S from './styles'
import { StaticImageData, ImageProps } from 'next/image'

type CustomImageProps = {
    cape?: boolean;

}
export const Image = ({ alt, src, cape }: CustomImageProps & ImageProps) => {
    const props = {
        cape: cape
    }
    return (
        <S.Container {...props}>
            <S.StyledImage {...props} alt={alt} src={src} />
        </S.Container>
    )
}
