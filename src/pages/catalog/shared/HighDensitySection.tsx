import Icon from "@/components/ui/icon";

const VARIANTS: {
  code: string;
  name: string;
  subtitle: string;
  features: string[];
  icon: string;
}[] = [
  {
    code: "HD",
    name: "Исполнение HD",
    subtitle: "Высокоплотный рулон без дополнительного покрытия.",
    icon: "Layers",
    features: [
      "Без покрытия — раскрой по месту монтажа",
      "Повышенная плотность 70–150 кг/м³",
      "Закрытая ячеистая структура",
      "Механическая прочность и износостойкость",
    ],
  },
  {
    code: "HD CM",
    name: "Исполнение HD CM",
    subtitle: "Высокоплотный рулон с самоклеящимся слоем для ускоренного монтажа.",
    icon: "Sticker",
    features: [
      "Самоклеящийся слой на внутренней стороне",
      "Ускоренный монтаж без дополнительного клея",
      "Удобство раскроя и фиксации",
      "Плотность 70–150 кг/м³",
    ],
  },
];

const SPECS: { label: string; value: string; icon: string }[] = [
  { label: "Плотность", value: "70–150 кг/м³", icon: "Weight" },
  { label: "Температура применения", value: "от −200 до +110 °C", icon: "Thermometer" },
  { label: "Группа горючести", value: "Г1", icon: "Flame" },
  { label: "Теплопроводность", value: "Низкая", icon: "Snowflake" },
  { label: "Эластичность и гибкость", value: "Высокая", icon: "Waves" },
];

const ADVANTAGES: string[] = [
  "Повышенная износостойкость и механическая прочность",
  "Удобство монтажа — особенно у версии HD CM благодаря самоклеящемуся слою",
  "Хорошая биологическая стойкость и экологическая безопасность",
];

const APPLICATIONS: { text: string; icon: string }[] = [
  { text: "Теплоизоляция трубопроводов (водоснабжение, отопление)", icon: "Pipette" },
  { text: "Вентиляционные и вытяжные системы", icon: "Wind" },
  { text: "Системы кондиционирования", icon: "Snowflake" },
  { text: "Промышленное и гражданское строительство, судостроение", icon: "Factory" },
];

export const HighDensitySection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">ПОВЫШЕННАЯ ПЛОТНОСТЬ</span>
        </div>
        <h2 className="cat-h2 text-white mb-5 max-w-3xl">
          Высокоплотные <span className="text-orange-500">рулоны</span>
        </h2>
        <p className="text-gray-400 text-[15px] sm:text-base leading-[1.75] max-w-3xl mb-12">
          Рулонная теплоизоляция из вспененного каучука повышенной плотности
          (70–150 кг/м³). Выпускается в двух исполнениях:{" "}
          <span className="text-gray-200 font-medium">HD</span> (без покрытия) и{" "}
          <span className="text-gray-200 font-medium">HD CM</span> (с самоклеящимся слоем).
        </p>

        {/* Исполнения HD / HD CM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-6">
          {VARIANTS.map((v) => (
            <div
              key={v.code}
              className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-9 transition-all duration-300 hover:border-orange-500/50"
            >
              <div className="absolute top-0 left-0 h-[2px] w-20 bg-orange-500" />
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                  <Icon name={v.icon} size={22} className="text-orange-400" />
                </div>
                <div>
                  <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold">
                    {v.code}
                  </span>
                  <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide leading-[1.2]">
                    {v.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.75] mb-7">
                {v.subtitle}
              </p>
              <div className="h-px w-full bg-white/5 mb-7" />
              <ul className="space-y-3.5">
                {v.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-[9px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-gray-200 text-[14px] sm:text-[14.5px] leading-[1.7]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Характеристики */}
        <div className="flex items-center gap-2 mt-14 mb-6">
          <Icon name="ClipboardList" size={16} className="text-orange-400" />
          <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold uppercase">
            Основные характеристики
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SPECS.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
              <div className="flex-shrink-0 w-11 h-11 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center mb-4">
                <Icon name={s.icon} size={20} className="text-orange-400" />
              </div>
              <span className="text-[10px] sm:text-[11px] tracking-[0.14em] text-gray-500 uppercase leading-snug mb-2">
                {s.label}
              </span>
              <div className="mt-auto text-white text-base sm:text-lg font-semibold tracking-wide leading-tight">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества и применение */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Преимущества */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-9">
            <div className="absolute top-0 left-0 h-[2px] w-20 bg-orange-500" />
            <div className="flex items-center gap-2 mb-6">
              <Icon name="CheckCircle2" size={16} className="text-orange-400" />
              <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold uppercase">
                Преимущества
              </span>
            </div>
            <ul className="space-y-4">
              {ADVANTAGES.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-[9px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="text-gray-200 text-[14px] sm:text-[15px] leading-[1.7]">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Применение */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-9">
            <div className="absolute top-0 left-0 h-[2px] w-20 bg-orange-500" />
            <div className="flex items-center gap-2 mb-6">
              <Icon name="Layers" size={16} className="text-orange-400" />
              <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold uppercase">
                Применение
              </span>
            </div>
            <ul className="space-y-4">
              {APPLICATIONS.map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <Icon name={a.icon} size={17} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-[14px] sm:text-[15px] leading-[1.7]">
                    {a.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighDensitySection;