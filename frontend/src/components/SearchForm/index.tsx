import { Search } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'
import * as S from './styles'

type SearchFormProps = {
    onSubmit?: () => void,
}
export const SearchForm = ({ onSubmit }: SearchFormProps) => {
    return (
        <S.Form>
            <label htmlFor="#search-input">Busque por tags, categorias ou conteúdo.</label>
            <span className='search-field'>
                <input id="search-input" type="search" placeholder='Exemplo: frontend' />
                <IconButton onClick={onSubmit} background={false}><Search size={20} /></IconButton>
            </span>
        </S.Form>
    )
}
