import Icon from "@/components/ui/icon";

type SelectionItem = {
  icon: string;
  condition: string;
  recommended: string;
  desc: string;
};

const ITEMS: SelectionItem[] = [
  {
    icon: "Droplets",
    condition: "Влага и аэрозоли",
    recommended: "METALL",
    desc: "Для участков, где требуется наружная защита теплоизоляции от влаги, аэрозолей и загрязнений.",
  },
  {
    icon: "Sun",
    condition: "Открытый воздух и УФ",
    recommended: "TITAN",
    desc: "Для наружных участков, где покрытие подвергается ультрафиолету, осадкам и атмосферным воздействиям.",
  },
  {
    icon: "Shield",
    condition: "Механическая защита",
    recommended: "PROM FORMA",
    desc: "Для технических зон, где требуется дополнительная стойкость наружного слоя к рабочим нагрузкам.",
  },
  {
    icon: "Layers",
    condition: "Повышенные эксплуатационные нагрузки",
    recommended: "PROM FORMA FOIL",
    desc: "Для участков, где нужна комбинация стеклоткани и алюминиевой фольги для защиты изоляции.",
  },
  {
    icon: "Sparkles",
    condition: "Алюминиевый внешний слой",
    recommended: "ALU",
    desc: "Для участков, где требуется алюминиевое покрытие с ПЭТФ-плёнкой как наружный защитный слой.",
  },
];

const SelectionCard = ({ item, index }: { item: SelectionItem; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-colors duration-300 hover:border-orange-500/40"
    style={{ boxShadow: "0 20px 60px -25px rgba(0,0,0,0.7)" }}
  >
    {/* Тонкая сетка */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    {/* Угловые акценты */}
    <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-orange-500/70 transition-colors group-hover:border-orange-500" />
    <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-orange-500/70 transition-colors group-hover:border-orange-500" />

    <div className="relative">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
          <Icon name={item.icon} size={20} className="text-orange-400" />
        </div>
        <span
          className="text-[11px] tracking-[0.2em] text-gray-500"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Условие */}
      <div className="t-label text-orange-400/90 tracking-[0.18em] text-[11px] mb-2">
        УСЛОВИЕ
      </div>
      <h3
        className="text-white text-[17px] sm:text-[18px] leading-tight mb-5"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase" }}
      >
        {item.condition}
      </h3>

      {/* Рекомендация */}
      <div className="border-t border-white/10 pt-4 mb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <Icon name="ArrowRight" size={14} className="text-orange-400" />
          <span className="t-label text-orange-400/90 tracking-[0.18em] text-[11px]">
            РЕКОМЕНДУЕМОЕ ПОКРЫТИЕ
          </span>
        </div>
        <div
          className="text-white text-[20px] sm:text-[22px] leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.01em" }}
        >
          {item.recommended}
        </div>
      </div>

      {/* Описание */}
      <p className="text-gray-400 text-[14px] leading-[1.65]">{item.desc}</p>
    </div>
  </article>
);

export const SelectionSection = () => {
  const top = ITEMS.slice(0, 3);
  const bottom = ITEMS.slice(3);

  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
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
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ПОДБОР</span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Как выбрать <span className="text-orange-500">покрытие</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Тип защитного покрытия подбирают по месту установки, воздействию влаги, ультрафиолета,
            механическим нагрузкам и требованиям к наружному слою теплоизоляции.
          </p>
        </div>

        {/* Сетка карточек: 3 + 2 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {top.map((item, i) => (
            <SelectionCard key={item.recommended} item={item} index={i} />
          ))}
        </div>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {bottom.map((item, i) => (
            <SelectionCard key={item.recommended} item={item} index={i + 3} />
          ))}
        </div>

        {/* Подпись */}
        <div className="mt-12 flex items-start gap-3 text-gray-500 text-[13px] sm:text-[14px] leading-relaxed max-w-4xl">
          <Icon name="Info" size={16} className="text-orange-400/80 mt-0.5 flex-shrink-0" />
          <p>
            Окончательный выбор покрытия зависит от условий эксплуатации, доступности участка для
            обслуживания, требований к внешнему слою и типа изолируемой поверхности.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;
