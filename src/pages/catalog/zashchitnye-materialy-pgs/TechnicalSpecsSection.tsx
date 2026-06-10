import Icon from "@/components/ui/icon";

type Spec = { label: string; value: string; icon: string; accent?: boolean };

const COVERINGS: Spec[] = [
  { label: "Материалы", value: "АЛМ / АЛФ / МБР / ПВХ / СТХ", icon: "Layers", accent: true },
  { label: "ТУ", value: "ТУ 5760-003-85495285-2015", icon: "FileBadge" },
  {
    label: "Температурный режим АЛМ / АЛФ / МБР / СТХ",
    value: "от −60 до +120 °C",
    icon: "Thermometer",
    accent: true,
  },
  { label: "Температурный режим ПВХ", value: "от −30 до +60 °C", icon: "Thermometer" },
  {
    label: "Назначение",
    value:
      "Защита теплоизоляционных и шумоизоляционных конструкций от механических повреждений, УФ-излучения, атмосферных осадков и внешних воздействий",
    icon: "ShieldCheck",
  },
  { label: "Условия применения", value: "Внутри помещений и на наружных участках", icon: "MapPin" },
  { label: "Срок службы", value: "более 25 лет", icon: "CalendarDays", accent: true },
];

const CASINGS: Spec[] = [
  {
    label: "Исполнения",
    value: "алюминиевые / оцинкованные / из нержавеющей стали",
    icon: "Box",
    accent: true,
  },
  { label: "ТУ", value: "ТУ 25.99.29-001-85495285-2019", icon: "FileBadge" },
  { label: "Алюминиевая окожушка", value: "толщина 0,7 мм", icon: "Ruler" },
  { label: "Оцинкованная окожушка", value: "толщина 0,45 мм", icon: "Ruler" },
  { label: "Нержавеющая сталь", value: "AISI 304, толщина 0,5 мм", icon: "Ruler", accent: true },
  {
    label: "Назначение",
    value:
      "Защита теплоизоляции трубопроводов на прямых участках от внешних воздействий и механических повреждений",
    icon: "ShieldCheck",
  },
  {
    label: "Поставка",
    value: "готовые металлические кожухи для монтажа на трубопровод",
    icon: "Package",
  },
];

const SpecRow = ({ s }: { s: Spec }) => (
  <div
    className={`group flex items-start gap-4 p-4 sm:p-5 rounded-sm border transition-colors ${
      s.accent
        ? "border-orange-500/30 bg-orange-500/[0.04] hover:border-orange-500/60"
        : "border-white/10 bg-white/[0.025] hover:border-orange-500/40"
    }`}
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
      <Icon name={s.icon} size={18} className="text-orange-400" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-[11px] sm:text-[12px] tracking-[0.14em] text-gray-500 uppercase leading-[1.55]">
        {s.label}
      </div>
      <div className="text-white font-semibold text-[14.5px] sm:text-[15px] leading-[1.45] mt-1.5">
        {s.value}
      </div>
    </div>
  </div>
);

const GroupHeader = ({
  num,
  label,
  icon,
}: {
  num: string;
  label: string;
  icon: string;
}) => (
  <div className="flex items-center gap-3 sm:gap-5 mb-6">
    <span
      className="text-[12px] sm:text-[13px] tracking-[0.28em] text-orange-500/80 font-semibold pt-1"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {num}
    </span>

    <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
      <Icon name={icon} size={20} className="text-orange-400" />
    </span>

    <h3
      className="text-white text-[20px] sm:text-[26px] leading-[1.05] tracking-[0.02em]"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        textTransform: "uppercase",
        textShadow: "0 1px 0 rgba(0,0,0,0.4)",
      }}
    >
      {label}
    </h3>

    <span className="hidden sm:flex flex-1 items-center gap-2 ml-1 min-w-0">
      <span className="h-[2px] w-8 bg-orange-500 flex-shrink-0" />
      <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
    </span>
  </div>
);

export const TechnicalSpecsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
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
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ТЕХНИЧЕСКИЕ ДАННЫЕ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Технические параметры{" "}
            <span className="text-orange-500">ЗМ.ПАНЦИРЬ</span>
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-6">
            Параметры защитных материалов зависят от типа покрытия, условий эксплуатации и
            конструкции изолируемого участка. Покровные материалы и металлические окожушки
            применяются как наружный защитный слой теплоизоляции и подбираются под конкретный
            объект.
          </p>
        </div>

        {/* ── 01 Покровные защитные материалы ── */}
        <div className="mb-12 sm:mb-14">
          <GroupHeader num="01" label="Покровные защитные материалы" icon="Layers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {COVERINGS.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>
        </div>

        {/* ── 02 Металлические окожушки ── */}
        <div>
          <GroupHeader num="02" label="Металлические окожушки" icon="Box" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {CASINGS.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>
        </div>

        {/* Примечание */}
        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Окончательный выбор защитного материала зависит от условий эксплуатации, типа
            изоляции, климатических воздействий, требований к механической защите и внешнему виду
            покрытия.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
