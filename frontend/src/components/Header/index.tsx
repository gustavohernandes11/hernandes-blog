import * as Styled from './styles'
import { Container } from '@mui/material' 
export const Header = ({children}: any) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}