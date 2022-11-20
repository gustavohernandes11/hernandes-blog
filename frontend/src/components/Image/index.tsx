import * as S from './styles'
import { StaticImageData, ImageProps } from 'next/image'

type CustomImageProps = {
    cape?: boolean | "true" | "false";

}
export const Image = ({ alt, src, cape, width, height }: CustomImageProps & ImageProps) => {
    const props = {
        cape: cape
    }
    return (
        <S.Container {...props}>
            <S.StyledImage {...props} width={width} height={height} alt={alt} src={src} />
        </S.Container>
    )
}
