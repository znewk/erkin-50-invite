import SectionTitle from "../ui/SectionTitle";

export default function LocationSection() {
  return (
    <section id="location" className="section-space relative z-10">
      <div className="container-main px-4">
        <SectionTitle
          eyebrow="Мекенжай"
          title="Өтетін орны"
          subtitle='Мерейтой "Арай Терасса" банкет залында өтеді.'
        />

        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[32px] p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
              Банкет залы
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              "Арай Терасса"
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-[#9b7b45]">Мекенжай</p>
                <p className="mt-1 text-lg leading-7">
                  Астана қаласы,
                  <br />
                  Сарайшық көшесі, 13
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9b7b45]">Уақыты</p>
                <p className="mt-1 text-lg">
                  19 шілде 2026 жыл, 16:00
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[32px] p-4">
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-[26px] border border-[#dec59a] bg-gradient-to-br from-[#fff8ef] to-[#f2e3cb] p-8 text-center">
              <div className="ornament-line mb-6">
                <span className="kazakh-ornament" />
              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
                Карта
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                "Арай Терасса"
              </h3>
              <p className="mt-4 max-w-md leading-7 text-[#5e4a38]">
                Банкет залына дейінгі маршрутты карта арқылы көре аласыз.
              </p>

              <a
                href="https://go.2gis.com/FfXTP"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-[#b88a3b] px-6 py-3 text-[#8d6421] transition hover:bg-[#fff5e4]"
              >
                Маршрутты көру
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}