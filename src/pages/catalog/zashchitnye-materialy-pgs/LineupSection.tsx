import Icon from "@/components/ui/icon";

type Material = {
  code: string;
  subtitle: string;
  icon: string;
  text: string;
};

const MATERIALS: Material[] = [
  {
    code: "АЛМ",
    subtitle: "Алюминиевое защитное покрытие",
    icon: "Shield",
    text: "Для защиты поверхностей теплоизоляционных и шумоизоляционных конструкций от механических повреждений, УФ-излучения и атмосферных воздействий. Температурный режим: от −60 до +120 °C.",
  },
  {
    code: "АЛФ",
    subtitle: "Покрытие из алюминиевой фольги",
    icon: "Layers",
    text: "Фольгированный покровный материал для защиты изоляции на трубопроводах, воздуховодах, инженерных системах и технологических поверхностях. Температурный режим: от −60 до +120 °C.",
  },
  {
    code: "МБР",
    subtitle: "Мембранное покрытие",
    icon: "Grid2x2",
    text: "Многослойный материал с мембраной и армированием стеклосеткой для защиты тепло- и шумоизоляции от атмосферных осадков, УФ-излучения и механических повреждений. Температурный режим: от −60 до +120 °C.",
  },
  {
    code: "ПВХ",
    subtitle: "Поливинилхлоридное покрытие",
    icon: "ShieldCheck",
    text: "Однослойное или многослойное ПВХ-покрытие для защиты изоляции от ультрафиолета, атмосферных осадков и механических повреждений. Температурный режим: от −30 до +60 °C.",
  },
  {
    code: "СТХ",
    subtitle: "Покрытие на основе стеклохолста",
    icon: "Scroll",
    text: "Покровный материал на основе стеклохолста для защиты тепло- и шумоизоляционных конструкций от внешних эксплуатационных воздействий. Температурный режим: от −60 до +120 °C.",
  },
  {
    code: "Окожушки",
    subtitle: "Металлические оболочки",
    icon: "Box",
    text: "Готовые металлические кожухи для защиты теплоизоляции трубопроводов на прямых участках. Доступные исполнения: алюминий, оцинкованная сталь, нержавеющая сталь.",
  },
];

const MaterialCard = ({ m, index }: { m: Material; index: number }) => (
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

    <div className="flex items-center gap-3 mb-1.5 mt-2 pr-10">
      <span className="w-10 h-10 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={m.icon} size={18} className="text-orange-400" />
      </span>
      <h3
        className="text-white text-[19px] sm:text-[21px] leading-tight"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        }}
      >
        {m.code}
      </h3>
    </div>

    <p className="text-orange-400/90 text-[12.5px] tracking-[0.04em] uppercase mb-4 pl-[52px]">
      {m.subtitle}
    </p>

    <p className="text-gray-400 text-[14px] leading-[1.7]">{m.text}</p>

    {/* Тонкая оранжевая линия снизу */}
    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
  </article>
);

export const LineupSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.04] blur-[160px]" />
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
            <span className="cat-label text-orange-400/90">ЛИНЕЙКА МАТЕРИАЛОВ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Материалы ЗМ.ПАНЦИРЬ для{" "}
            <span className="text-orange-500">наружной защиты изоляции</span>
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-6">
            Линейка включает покровные материалы на основе алюминия, фольги, мембранных и
            полимерных покрытий, стеклохолста, а также металлические окожушки. Материал
            подбирается по условиям эксплуатации: помещение или улица, влажность, УФ-воздействие,
            механические нагрузки, требования к внешнему виду и сроку службы покрытия.
          </p>
        </div>

        {/* Сетка 3 + 3 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {MATERIALS.map((m, i) => (
            <MaterialCard key={m.code} m={m} index={i} />
          ))}
        </div>

        {/* Техническое примечание */}
        <div className="mt-10 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Покровные материалы АЛМ, АЛФ, МБР, ПВХ и СТХ изготавливаются по
            ТУ 5760-003-85495285-2015. Металлические окожушки изготавливаются по
            ТУ 25.99.29-001-85495285-2019.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LineupSection;
