"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isMounted, setIsMounted] = useState(true);
    const [isHiding, setIsHiding] = useState(false);

    useEffect(() => {
        const hideTimer = setTimeout(() => {
            setIsHiding(true);
        }, 1800);

        const unmountTimer = setTimeout(() => {
            setIsMounted(false);
        }, 2600);

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(unmountTimer);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div className={`loader-overlay ${isHiding ? "loader-overlay-hide" : ""}`}>
            <div className={`loader-inner ${isHiding ? "loader-inner-hide" : ""}`}>
                <div className="loader-ornament" />
                <div className="loader-text-main">Еркін 50 жас</div>
                <div className="loader-text-sub">Қош келдіңіздер</div>
            </div>
        </div>
    );
}