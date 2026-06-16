import Icon from "@/components/ui/icon";

const COLUMNS = [
  {
    label: "ОПОРЫ",
    title: "СОП «ПЕРИМЕТР»",
    icon: "Anchor",
    text: "Опоры применяются для крепления трубопроводов с опорой на металлоконструкции и строительные конструкции.",
    items: [
      "Трубопроводы тепловых сетей",
      "Холодоснабжение и системы кондиционирования",
      "Трубопроводы водоснабжения и водоотведения",
      "Технологические трубопроводы на объектах ПГС и промышленности",
    ],
  },
  {
    label: "ПОДВЕСЫ",
    title: "Хотпайп S",
    icon: "Link",
    text: "Подвесы применяются для крепления трубопроводов с подвесом к перекрытиям и несущим конструкциям.",
    items: [
      "Подвесные трассы инженерных коммуникаций",
      "Трубопроводы под перекрытиями зданий",
      "Системы отопления и горячего водоснабжения",
      "Технологические трубопроводы промышленных объектов",
    ],
  },
];

export const ApplicationsSection = () => (
  <section className="relative overflow-hidden border-t border-white/5">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">ПРИМЕНЕНИЕ</span>
        </div>
        <h2 className="cat-h2 text-white mb-6">
          Где <span className="text-orange-500">применяются</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
          Опорно-подвесные системы применяются на объектах ПГС и промышленности
          для крепления трубопроводов и инженерных коммуникаций.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {COLUMNS.map((c) => (
          <article
            key={c.title}
            className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-8"
            style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
          >
            <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500" />
            <div className="flex items-center gap-3.5 mb-5">
              <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
                <Icon name={c.icon} size={20} className="text-orange-400" />
              </span>
              <div>
                <span
                  className="block text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {c.label}
                </span>
                <h3
                  className="text-white text-[20px] leading-[1.15]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-400 text-[14px] leading-[1.65] mb-6">{c.text}</p>

            <div className="space-y-0">
              {c.items.map((it) => (
                <div
                  key={it}
                  className="flex items-center gap-2.5 py-2.5 border-t border-white/[0.06]"
                >
                  <Icon name="Check" size={14} className="text-orange-400 flex-shrink-0" />
                  <span className="text-gray-300 text-[13.5px] leading-snug">{it}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ApplicationsSection;
