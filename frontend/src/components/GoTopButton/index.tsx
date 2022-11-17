import { ChevronsUp } from '@styled-icons/feather'
import { IconButton } from 'components/IconButton'

export const GoTopButton = ({ className }: any) => {
    function backToTop() {
        const content = document.getElementsByClassName('content')
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        content[0].scrollTop = 0;
    }
    return (
        <IconButton onClick={backToTop} className={className}>
            <ChevronsUp size={20} />
        </IconButton>
    )
}
