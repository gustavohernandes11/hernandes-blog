import { useEffect, useRef, useState } from "react";

export const useShowFixedComponents = () => {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);

    const controlNavbar = () => {
        if (typeof window === "undefined") return;
        const scrolledTo = window.scrollY + window.innerHeight;
        const isReachBottom = document.body.scrollHeight === scrolledTo;
        const isHomePage = window.location.pathname === "/";

        if (isHomePage || window.scrollY < 120 || isReachBottom) {
            setShow(true);
            return;
        }

        const hasScrolledDown = window.scrollY > lastScrollY.current;
        if (hasScrolledDown) {
            setShow(false);
        } else {
            setShow(true);
        }

        lastScrollY.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return { show };
};
