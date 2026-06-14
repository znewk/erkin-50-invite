import SectionTitle from "../ui/SectionTitle";
import CountdownCard from "./CountdownCard";

const weekDays = ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жс"];

const calendarDays = [
    { day: 29, muted: true },
    { day: 30, muted: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },

    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },

    { day: 13 },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19, active: true },

    { day: 20 },
    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },

    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: 1, muted: true },
    { day: 2, muted: true },
];

export default function CalendarSection() {
    return (
        <section id="calendar" className="section-space relative z-10">
            <div className="container-main px-4">
                <SectionTitle
                    eyebrow="Күнтізбе"
                    title="Күнімізді белгілеп қойыңыз"
                    subtitle="Мерейтой 2026 жылдың 19 шілдесі күні, жексенбіде өтеді."
                />

                <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="rounded-[32px] border border-[rgba(184,138,59,0.28)] bg-gradient-to-br from-[#7c6033] via-[#6e542d] to-[#4f3b21] p-5 text-white shadow-[0_20px_50px_rgba(60,40,15,0.22)] md:p-7">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-2xl font-medium md:text-3xl">
                                Шілде 2026
                            </h3>
                        </div>

                        <div className="grid grid-cols-7 gap-y-4 text-center text-sm text-[#f1e6cf] md:text-base">
                            {weekDays.map((weekDay) => (
                                <div key={weekDay} className="py-1 font-medium">
                                    {weekDay}
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 grid grid-cols-7 gap-y-4 text-center text-lg md:text-[28px] md:leading-none">
                            {calendarDays.map((item, index) => {
                                const isMuted = item.muted;
                                const isActive = item.active;

                                return (
                                    <div
                                        key={`${item.day}-${index}`}
                                        className={[
                                            "mx-auto flex h-11 w-11 items-center justify-center rounded-full transition md:h-12 md:w-12",
                                            isMuted ? "text-white/28" : "text-white",
                                            isActive
                                                ? "bg-[#d9bf8a] font-semibold text-[#4f3b21] shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
                                                : "",
                                        ].join(" ")}
                                    >
                                        {item.day}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <CountdownCard />

                        <div className="glass-card flex flex-col justify-center rounded-[32px] p-8">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
                                Мереке туралы
                            </p>

                            <div className="mt-6 space-y-5">
                                <div>
                                    <p className="text-sm text-[#9b7b45]">Күні</p>
                                    <p className="text-2xl font-semibold">
                                        19 шілде 2026
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-[#9b7b45]">Апта күні</p>
                                    <p className="text-2xl font-semibold">
                                        Жексенбі
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-[#9b7b45]">Басталу уақыты</p>
                                    <p className="text-2xl font-semibold">
                                        16:00
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 rounded-3xl border border-[#e0c89e] bg-white/60 p-5">
                                <p className="leading-7 text-[#5e4a38]">
                                    Осы ерекше күнді бірге қарсы алып, ақ тілектеріңізді арнауға
                                    шақырамыз.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}