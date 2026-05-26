import Icon from "@/components/ui/icon";

type Spec = { label: string; value: string; icon: string; accent?: boolean };

const GLUE: Spec[] = [
  { label: "Основа", value: "Хлоропреновый каучук", icon: "FlaskConical" },
  { label: "Объём", value: "1 л", icon: "Package" },
  { label: "Время сушки", value: "5–7 мин", icon: "Timer", accent: true },
  { label: "Расход", value: "100–200 г/м²", icon: "Gauge" },
  { label: "Открытое время", value: "30–45 мин", icon: "Clock" },
  { label: "Метод нанесения", value: "Кисть, валик", icon: "Brush" },
  { label: "Срок хранения", value: "12 месяцев с даты изготовления", icon: "CalendarDays" },
  { label: "Термостойкость конечного изделия", value: "150 °C", icon: "Thermometer", accent: true },
];

const CLEANER: Spec[] = [
  { label: "Объём", value: "1 л", icon: "Package" },
  { label: "Срок хранения", value: "18 месяцев с даты изготовления", icon: "CalendarDays" },
  { label: "Температура хранения и перевозки", value: "от +10 до +40 °C", icon: "Thermometer", accent: true },
  { label: "Назначение", value: "Разбавитель клея, очистка инструмента, обезжиривание поверхностей", icon: "SprayCan" },
  { label: "Запах", value: "Нейтральный", icon: "Wind" },
  { label: "Биологическая стойкость", value: "Хорошая", icon: "Leaf" },
];

const TAPES: Spec[] = [
  { label: "Толщина", value: "3 мм", icon: "Minimize2" },
  { label: "Длина", value: "10 / 15 м", icon: "MoveHorizontal" },
  { label: "Ширина", value: "15 / 50 / 100 мм", icon: "Ruler" },
  { label: "Температура применения", value: "от −200 до +110 °C", icon: "Thermometer", accent: true },
];

const TAPES_SAFETY: Spec[] = [
  { label: "Группа горючести", value: "Г1", icon: "ShieldCheck" },
  { label: "Группа воспламеняемости", value: "В1", icon: "Flame" },
  { label: "Дымообразующая способность", value: "Д3", icon: "CloudFog" },
  { label: "Показатель токсичности", value: "Т2", icon: "AlertTriangle" },
];

const SpecRow = ({ s }: { s: Spec }) => (
  <div
    className={`group flex items-center gap-4 p-4 sm:p-5 rounded-sm border transition-colors ${
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
      <div className="text-white font-semibold text-[15px] sm:text-base leading-[1.35] mt-1.5">
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
  <div className="flex items-center gap-3 mb-5">
    <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold">{num}</span>
    <Icon name={icon} size={16} className="text-orange-400" />
    <span className="t-label text-orange-400/90 tracking-[0.18em]">{label}</span>
    <span className="h-px flex-1 bg-white/10" />
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
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="t-label text-orange-400/90 tracking-[0.18em]">ПАРАМЕТРЫ</span>
        </div>
        <h2 className="t-h2 text-white mb-12 max-w-3xl">
          Технические параметры{" "}
          <span className="text-orange-500">монтажных материалов</span>
        </h2>

        {/* ── 01 Клей Unionflex ── */}
        <div className="mb-12 sm:mb-14">
          <GroupHeader num="01" label="КЛЕЙ UNIONFLEX" icon="Droplet" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {GLUE.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>
        </div>

        {/* ── 02 Очиститель Unionflex ── */}
        <div className="mb-12 sm:mb-14">
          <GroupHeader num="02" label="ОЧИСТИТЕЛЬ UNIONFLEX" icon="SprayCan" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {CLEANER.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>
        </div>

        {/* ── 03 Стыковочные ленты Unionflex ── */}
        <div>
          <GroupHeader num="03" label="СТЫКОВОЧНЫЕ ЛЕНТЫ UNIONFLEX" icon="Layers" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
            {TAPES.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {TAPES_SAFETY.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-5 sm:p-6 transition-all duration-300 hover:border-orange-500/50"
              >
                <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                    <Icon name={s.icon} size={16} className="text-orange-400" />
                  </div>
                </div>
                <div className="text-[11px] tracking-[0.14em] text-gray-500 uppercase leading-snug mb-2">
                  {s.label}
                </div>
                <div className="text-white text-2xl sm:text-[26px] font-bold leading-tight">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Техническая подпись */}
        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Фактический комплект монтажных материалов подбирают по типу изоляции, наружному
            покрытию, ширине стыка, условиям эксплуатации и требованиям к монтажу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
