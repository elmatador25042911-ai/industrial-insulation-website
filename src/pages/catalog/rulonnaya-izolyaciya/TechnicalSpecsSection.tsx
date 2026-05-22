import Icon from "@/components/ui/icon";

const THERMAL: { temp: string; value: string }[] = [
  { temp: "−40 °C", value: "0,032" },
  { temp: "−20 °C", value: "0,034" },
  { temp: "0 °C", value: "0,036" },
  { temp: "+20 °C", value: "0,038" },
  { temp: "+40 °C", value: "0,040" },
];

type Spec = { label: string; value: string; icon: string; accent?: boolean };

const OPERATION: Spec[] = [
  { label: "Температура применения", value: "от −150 до +110 °C", icon: "Thermometer", accent: true },
  { label: "Сопротивление диффузии пара, μ", value: "≥ 10 000", icon: "Droplets" },
  { label: "Плотность", value: "55 ± 15 кг/м³", icon: "Layers" },
  { label: "Коэффициент паропроницаемости", value: "0,0034 мг/(м·ч·Па)", icon: "Wind" },
];

const PHYSICAL: Spec[] = [
  { label: "Показатель кислотности pH", value: "Нейтральный", icon: "Beaker" },
  { label: "Экологическая безопасность", value: "Без асбеста, без CFC–HCFC", icon: "Sprout" },
  { label: "Биологическая стойкость", value: "Хорошая", icon: "Leaf" },
  { label: "Запах", value: "Нейтральный", icon: "Wind" },
  { label: "Условная прочность при растяжении", value: "0,07 МПа", icon: "Maximize2" },
  { label: "Цвет", value: "Чёрный", icon: "Palette" },
];

const SAFETY: Spec[] = [
  { label: "Пожарная безопасность", value: "Г1", icon: "ShieldCheck" },
  { label: "Группа воспламеняемости", value: "В1–В2", icon: "Flame" },
  { label: "Дымообразующая способность", value: "Д2–Д3", icon: "CloudFog" },
  { label: "Токсичность продуктов горения", value: "Т2", icon: "AlertTriangle" },
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

const GroupHeader = ({ num, label, icon }: { num: string; label: string; icon: string }) => (
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="t-label text-orange-400/90 tracking-[0.18em]">СПЕЦИФИКАЦИЯ</span>
        </div>
        <h2 className="t-h2 text-white mb-12 max-w-3xl">
          Технические <span className="text-orange-500">характеристики</span>
        </h2>

        {/* ── 01 Теплотехнические свойства ── */}
        <div className="mb-12 sm:mb-14">
          <GroupHeader num="01" label="ТЕПЛОТЕХНИЧЕСКИЕ СВОЙСТВА" icon="Snowflake" />

          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-8">
            <div className="absolute top-0 left-0 h-[2px] w-16 bg-orange-500" />

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7">
              <div>
                <div className="text-white text-lg sm:text-xl font-semibold leading-tight">
                  Коэффициент теплопроводности λ
                </div>
                <div className="text-gray-500 text-[13px] tracking-wide mt-1">
                  Зависимость от температуры эксплуатации
                </div>
              </div>
              <div className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">
                Вт / (м · °C)
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {THERMAL.map((t) => (
                <div
                  key={t.temp}
                  className="group relative p-4 rounded-sm bg-white/[0.025] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition-colors"
                >
                  <div className="text-[11px] tracking-[0.18em] text-orange-500/80 font-semibold uppercase mb-2">
                    {t.temp}
                  </div>
                  <div className="text-white font-mono text-xl sm:text-2xl font-bold tracking-tight">
                    {t.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 02 Эксплуатационные параметры ── */}
        <div className="mb-12 sm:mb-14">
          <GroupHeader num="02" label="ЭКСПЛУАТАЦИОННЫЕ ПАРАМЕТРЫ" icon="Settings" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {OPERATION.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>
        </div>

        {/* ── 03 Физико-химические свойства ── */}
        <div className="mb-12 sm:mb-14">
          <GroupHeader num="03" label="ФИЗИКО-ХИМИЧЕСКИЕ СВОЙСТВА" icon="Atom" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {PHYSICAL.map((s) => (
              <SpecRow key={s.label} s={s} />
            ))}
          </div>
        </div>

        {/* ── 04 Пожарно-технические показатели ── */}
        <div>
          <GroupHeader num="04" label="ПОЖАРНО-ТЕХНИЧЕСКИЕ ПОКАЗАТЕЛИ" icon="Flame" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {SAFETY.map((s) => (
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
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
