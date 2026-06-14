type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#9c7a45]">
          {eyebrow}
        </p>
      ) : null}

      <div className="ornament-line mb-5">
        <span className="kazakh-ornament" />
      </div>

      <h2 className="script-title text-4xl text-[#8d6421] md:text-6xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-[#6b5847] md:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}