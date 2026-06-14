export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-20">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: 'url("/images/kazakh-bg.jpg")' }}
            />
            <div className="hero-glow" />

            <div className="container-main relative z-10">
                <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.38em] text-[#9a7945]">
                        Құрметті ағайын-туыс, бауырлар, құда-жекжат, дос-жарандар, Әріптестер!
                    </p>

                    <div className="ornament-line mb-8">
                        <span className="kazakh-ornament" />
                    </div>

                    <h1 className="elegant-title text-5xl font-semibold leading-tight md:text-7xl">
                        <span className="script-title block text-[#8d6421] md:text-6xl">
                            Мерей той
                        </span>
                        <span className="mt-3 block">Еркін</span>
                        <span className="mt-2 block gold-text">50 жас мерекесі</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-xl leading-8 text-[#5e4a38] md:text-2xl">
                        Сіз(дер)ді
                        <span className="font-semibold text-[#8d6421]"> Еркін </span>
                        50 жасқа толған мерейтойының қадірлі қонағы болуға
                        шын жүректен шақырамыз.
                    </p>

                    <div className="glass-card mt-10 rounded-[32px] px-8 py-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#9b7b45]">
                            Өтетін күні
                        </p>
                        <p className="mt-3 text-3xl font-semibold md:text-4xl">19 шілде 2026</p>
                        <p className="mt-2 text-lg text-[#6b5847]">жексенбі, сағат 16:00</p>
                    </div>

                    <a
                        href="#calendar"
                        className="mt-10 inline-flex items-center rounded-full bg-[#a77931] px-8 py-4 text-base font-medium text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#966825]"
                    >
                        Толық ақпарат
                    </a>
                </div>
            </div>
        </section>
    );
}