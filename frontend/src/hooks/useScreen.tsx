import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const isTablet = useMediaQuery({ query: '(max-width: 769px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

    return { isDesktopOrLaptop, isTablet, isMobile }
}
