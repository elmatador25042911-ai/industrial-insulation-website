import Icon from "@/components/ui/icon";

type SelectionCase = {
  title: string;
  icon: string;
  text: string;
  recommends: string[];
};

const CASES: SelectionCase[] = [
  {
    title: "Внутренние помещения",
    icon: "Building2",
    text: "Для технических помещений, машинных залов, ИТП, ЦТП и внутренних инженерных систем подходят покровные материалы, обеспечивающие аккуратный внешний слой и защиту изоляции от загрязнений и случайных повреждений.",
    recommends: ["АЛФ", "ПВХ", "СТХ"],
  },
  {
    title: "Наружные участки",
    icon: "CloudSun",
    text: "Для улицы и открытых участков трасс важна защита от осадков, ультрафиолета, перепадов температуры и климатических воздействий.",
    recommends: ["АЛМ", "АЛФ", "МБР", "СТХ"],
  },
  {
    title: "Повышенная влажность",
    icon: "Droplets",
    text: "На участках с риском намокания, брызг, конденсата или регулярного контакта с влажной средой требуется более стойкий наружный защитный слой.",
    recommends: ["МБР", "ПВХ", "Окожушки"],
  },
  {
    title: "Механические нагрузки",
    icon: "Hammer",
    text: "Если изоляция находится в зоне обслуживания, проходов, ремонта или возможных ударных воздействий, предпочтительны более жёсткие защитные решения.",
    recommends: ["Окожушки", "АЛМ", "МБР"],
  },
  {
    title: "Требования к внешнему виду",
    icon: "Sparkles",
    text: "Для открытых инженерных зон, производственных помещений и участков с повышенными требованиями к визуальному состоянию изоляции применяются покрытия с аккуратным финишным слоем.",
    recommends: ["АЛФ", "ПВХ", "Окожушки"],
  },
];

const SelectionCard = ({ c, index }: { c: SelectionCase; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 p-6 sm:p-7 flex flex-col"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    {/* Угловые акценты */}
    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-orange-500" />

    {/* Индекс */}
    <div
      className="absolute top-4 right-4 text-[11px] tracking-[0.2em] text-gray-500"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>

    <div className="flex items-center gap-3 mb-4 mt-2 pr-10">
      <span className="w-10 h-10 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={c.icon} size={18} className="text-orange-400" />
      </span>
      <h3
        className="text-white text-[17px] sm:text-[18px] leading-tight"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
        }}
      >
        {c.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.7] mb-5">{c.text}</p>

    {/* Рекомендации — теги */}
    <div className="mt-auto pt-4 border-t border-white/10">
      <div className="text-[11px] tracking-[0.18em] text-gray-500 uppercase mb-2.5">
        Рекомендуется
      </div>
      <div className="flex flex-wrap gap-2">
        {c.recommends.map((r) => (
          <span
            key={r}
            className="px-2.5 py-1 rounded-sm border border-orange-500/30 bg-orange-500/[0.06] text-orange-300 text-[12.5px] font-medium tracking-wide"
          >
            {r}
          </span>
        ))}
      </div>
    </div>

    {/* Тонкая оранжевая линия снизу */}
    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
  </article>
);

export const SelectionSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.04] blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Шапка */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ПОДБОР МАТЕРИАЛА</span>
          </div>
          <h2 className="cat-h2 text-white">
            Как выбрать{" "}
            <span className="text-orange-500">защитный материал</span>
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-6">
            Тип защитного материала подбирается по условиям эксплуатации изоляции: где находится
            участок, есть ли воздействие влаги, ультрафиолета, осадков, механических нагрузок, а
            также какие требования предъявляются к внешнему виду и сроку службы покрытия.
          </p>
        </div>

        {/* Сетка карточек: ряд 3 + ряд 2 (центрированный) */}
        <div className="mt-12 space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CASES.slice(0, 3).map((c, i) => (
              <SelectionCard key={c.title} c={c} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:max-w-[66.666%] lg:mx-auto">
            {CASES.slice(3).map((c, i) => (
              <SelectionCard key={c.title} c={c} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;