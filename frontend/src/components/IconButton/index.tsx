import * as S from './styles'


export type IconButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    background?: backgroundTypes;
    className?: string;
}
export type backgroundTypes = boolean | string;

export const IconButton = ({ children, onClick, background = true, className }: IconButtonProps) => {
    const props = {
        background: background,
        className: className,
        onClick: onClick,
    }
    return (
        <S.Button {...props}>
            {children}
        </S.Button>
    )
}
