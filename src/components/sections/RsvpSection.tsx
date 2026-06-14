export default function RsvpSection() {
  const phone = "77784470135";

  const message = encodeURIComponent(
    "Сәлеметсіз бе! Еркіннің 50 жас мерейтойына қатысатынымды растаймын."
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="section-space relative z-10">
      <div className="container-main px-4 sm:px-5">
        <div className="glass-card relative mx-auto w-full max-w-5xl overflow-hidden rounded-[22px] p-4 sm:rounded-[26px] sm:p-6 md:rounded-[32px] md:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-0 top-0 h-16 w-16 rounded-tl-[22px] border-l-2 border-t-2 border-[#d7bc8a] sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-tl-[28px]" />
            <div className="absolute right-0 top-0 h-16 w-16 rounded-tr-[22px] border-r-2 border-t-2 border-[#d7bc8a] sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-tr-[28px]" />
            <div className="absolute bottom-0 left-0 h-16 w-16 rounded-bl-[22px] border-b-2 border-l-2 border-[#d7bc8a] sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-bl-[28px]" />
            <div className="absolute bottom-0 right-0 h-16 w-16 rounded-br-[22px] border-b-2 border-r-2 border-[#d7bc8a] sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-br-[28px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0 text-center lg:text-left">
              <div className="ornament-line mb-4 sm:mb-5 lg:justify-start lg:before:w-16 lg:after:hidden">
                <span className="kazakh-ornament" />
              </div>

              <p className="break-words text-[10px] uppercase tracking-[0.22em] text-[#9b7b45] sm:text-xs sm:tracking-[0.28em]">
                RSVP
              </p>

              <h2 className="script-title mt-3 break-words text-2xl leading-tight text-[#8d6421] sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Қатысуыңызды растаңыз
              </h2>

              <p className="mx-auto mt-4 max-w-2xl break-words text-sm leading-6 text-[#5e4a38] sm:text-base sm:leading-7 md:text-lg lg:mx-0">
                Құрметті қонақтар, мерейтойға келетініңізді алдын ала WhatsApp
                арқылы хабарлап қоюыңызды сұраймыз.
              </p>

              <p className="mx-auto mt-3 max-w-2xl break-words text-sm leading-6 text-[#7a634c] sm:text-[15px] md:text-base lg:mx-0">
                Бұл бізге қонақтар санын нақтылап, дастарханды ыңғайлы
                ұйымдастыруға көмектеседі.
              </p>
            </div>

            <div className="min-w-0 rounded-[20px] border border-[#e0c89e] bg-white/70 p-4 text-center shadow-sm sm:rounded-[24px] sm:p-5 md:p-6">
              <p className="break-words text-[10px] uppercase tracking-[0.18em] text-[#9b7b45] sm:text-xs sm:tracking-[0.22em]">
                WhatsApp арқылы
              </p>

              <div className="mt-3 sm:mt-4 text-[#5a432d]">
                <p className="break-words text-base font-semibold leading-snug sm:text-lg md:text-xl">
                  Келетініңізді растаңыз
                </p>
                <p className="mt-2 break-words text-sm leading-6 text-[#7a634c] md:text-base">
                  Төмендегі батырманы басып, дайын хабарламаны жіберіңіз
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[#b88a3b] bg-gradient-to-r from-[#b88a3b] to-[#8d6421] px-4 py-3 text-sm font-medium leading-snug text-white shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-lg sm:px-5 md:mt-6 md:px-6 md:py-4 md:text-base"
              >
                Қатысатынымды растау
              </a>

              <p className="mt-4 break-words text-xs leading-5 text-[#8b7357] sm:text-sm">
                Батырманы басқанда WhatsApp ашылып, хабарлама автоматты түрде
                дайын тұрады.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}