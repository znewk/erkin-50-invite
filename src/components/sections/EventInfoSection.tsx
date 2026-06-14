import SectionTitle from "../ui/SectionTitle";

export default function EventInfoSection() {
  return (
    <section className="section-space relative z-10">
      <div className="container-main px-4">
        <SectionTitle
          eyebrow="Шақыру"
          title="Қуанышымызға ортақ болыңыздар"
          subtitle="Бұл кеш – отбасы, ағайын, туыс пен достар бас қосатын ерекше мереке. Сіздерді ақ дастарханымыздың қадірлі қонағы болуға шақырамыз."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
              Иелері
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Смагуловтар отбасы</h3>
            
          </div>

          <div className="glass-card rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
              Формат
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Мерейтой кеші</h3>
            <p className="mt-3 leading-7 text-[#6b5847]">
              Дәстүр мен сыйластыққа толы, жақын жандар бас қосатын думанды кеш.
            </p>
          </div>

          <div className="glass-card rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b7b45]">
              Тілек
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Қатысуыңыз маңызды</h3>
            <p className="mt-3 leading-7 text-[#6b5847]">
              Ізгі ниетпен келіп, қуанышымызға ортақ болуыңызды сұраймыз.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}