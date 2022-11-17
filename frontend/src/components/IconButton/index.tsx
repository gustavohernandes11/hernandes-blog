import * as S from './styles'


export type IconButtonProps = {
    children: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    background?: backgroundTypes;
    className?: string;
    as?: any;
    href?: string,
}
export type backgroundTypes = boolean | string;

export const IconButton = ({ children, onClick, background = true, className, as, href }: IconButtonProps) => {
    const props = {
        background: background,
        className: className,
        onClick: onClick,
        as: as,
        href: href,
    }
    return (
        <S.Button {...props}>
            {children}
        </S.Button>
    )
}
