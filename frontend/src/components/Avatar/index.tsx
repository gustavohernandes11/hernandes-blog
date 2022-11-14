import Image, { StaticImageData } from 'next/image';
import * as S from './styles'
import AuthorImage from '../../assets/imgs/gustavo-picture.png'
type AvatarProps = {
    size?: "large" | "small";
    alt?: string;
    src?: string | StaticImageData;
}
export const Avatar = ({ size = 'large', alt = "imagem do autor", src = AuthorImage }: AvatarProps) => {
    const props = {
        size: size
    }
    return (
        <S.Frame {...props}>
            <Image alt={alt} src={src} width={95} height={95} />
        </S.Frame>
    )
}
