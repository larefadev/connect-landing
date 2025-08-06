// src/hooks/useParallax.ts
import { useEffect, useState } from "react";

export const useParallax = (speed = 0.3) => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * speed);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return offsetY;
};
