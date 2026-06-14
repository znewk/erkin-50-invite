"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const initialTime: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

function getTimeLeft(): TimeLeft {
    const targetDate = new Date("2026-07-19T16:00:00");
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
        return initialTime;
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

type AnimatedNumberProps = {
    value: number;
    mounted: boolean;
};

function AnimatedNumber({ value, mounted }: AnimatedNumberProps) {
    const formatted = String(value).padStart(2, "0");
    const [displayValue, setDisplayValue] = useState(mounted ? formatted : "--");
    const [prevValue, setPrevValue] = useState(mounted ? formatted : "--");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!mounted) return;

        const nextValue = String(value).padStart(2, "0");
        if (nextValue === displayValue) return;

        setPrevValue(displayValue);
        setDisplayValue(nextValue);
        setIsAnimating(true);

        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 450);

        return () => clearTimeout(timer);
    }, [value, mounted, displayValue]);

    return (
        <div className="count-number-window">
            <span
                className={`count-number-layer count-number-prev ${isAnimating ? "count-number-prev-out" : ""
                    }`}
            >
                {prevValue}
            </span>

            <span
                className={`count-number-layer count-number-current ${isAnimating ? "count-number-current-in" : ""
                    }`}
            >
                {displayValue}
            </span>
        </div>
    );
}

export default function CountdownCard() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(getTimeLeft());

        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const items = [
        { label: "Күн", value: timeLeft.days },
        { label: "Сағат", value: timeLeft.hours },
        { label: "Минут", value: timeLeft.minutes },
        { label: "Секунд", value: timeLeft.seconds },
    ];

    return (
        <div className="glass-card w-full rounded-[32px] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
                Тойға дейін
            </p>

            <h3 className="script-title mt-4 text-4xl text-[#8d6421] md:text-5xl">
                Кері санақ
            </h3>

            <div className="mt-8 grid w-full grid-cols-4 gap-2 md:gap-3">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="count-card flex min-w-0 flex-col items-center justify-center rounded-[20px] border border-[#dfc89e] px-2 py-4 text-center md:rounded-[24px] md:px-3 md:py-5"
                    >
                        <AnimatedNumber value={item.value} mounted={mounted} />

                        <div className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#9b7b45] sm:text-xs md:text-sm">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}