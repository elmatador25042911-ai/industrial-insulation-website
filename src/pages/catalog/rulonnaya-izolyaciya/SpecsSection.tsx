import Icon from "@/components/ui/icon";

const SPECS: { label: string; value: string; icon: string }[] = [
  { label: "Температура применения", value: "от −150 до +110 °C", icon: "Thermometer" },
  { label: "Теплопроводность при 0 °C", value: "λ = 0,036 Вт/(м·°C)", icon: "Snowflake" },
  { label: "Сопротивление диффузии пара, μ", value: "≥ 10 000", icon: "Droplets" },
  { label: "Группа горючести", value: "Г1", icon: "Flame" },
  { label: "Группа воспламеняемости", value: "В1–В2", icon: "Sparkles" },
  { label: "Дымообразование / токсичность", value: "Д2–Д3 / Т2", icon: "CloudFog" },
];

export const SpecsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-orange-500/[0.06] blur-[140px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">ХАРАКТЕРИСТИКИ</span>
        </div>
        <h2 className="cat-h2 text-white mb-12 max-w-3xl">
          Основные характеристики <span className="text-orange-500">материала</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SPECS.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
              <div className="flex items-start gap-3 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                  <Icon name={s.icon} size={18} className="text-orange-400" />
                </div>
                <span className="text-[11px] sm:text-[12px] tracking-[0.14em] text-gray-500 uppercase leading-snug pt-1">
                  {s.label}
                </span>
              </div>
              <div className="text-2xl sm:text-[26px] font-bold text-white leading-tight">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;