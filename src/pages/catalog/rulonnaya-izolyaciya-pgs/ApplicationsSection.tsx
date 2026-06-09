import Icon from "@/components/ui/icon";

const APPLICATIONS: { icon: string; title: string; text: string }[] = [
  {
    icon: "Wind",
    title: "Воздуховоды и вентиляция",
    text: "Изоляция воздуховодов, вентиляционных каналов и элементов систем кондиционирования.",
  },
  {
    icon: "Container",
    title: "Резервуары и ёмкости",
    text: "Применение на цилиндрических и плоских поверхностях резервуаров, баков и технологических ёмкостей.",
  },
  {
    icon: "Building2",
    title: "Технические помещения",
    text: "Использование в ИТП, ЦТП, машинных залах, производственных и инженерных помещениях.",
  },
  {
    icon: "Spline",
    title: "Поверхности сложной формы",
    text: "Подходит для участков, где требуется гибкий материал для изоляции криволинейных и нестандартных поверхностей.",
  },
];

export const ApplicationsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[520px] h-[520px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">ПРИМЕНЕНИЕ</span>
        </div>
        <h2 className="cat-h2 text-white mb-6 max-w-3xl">
          Области применения <span className="text-orange-500">на промышленных объектах</span>
        </h2>
        <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed max-w-3xl mb-12">
          Рулонная изоляция применяется для теплоизоляции инженерных систем зданий и
          промышленных объектов: воздуховодов, вентиляционных каналов, резервуаров,
          ёмкостей, технологических поверхностей и участков сложной формы.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {APPLICATIONS.map((a, i) => (
            <div
              key={a.title}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                  <Icon name={a.icon} fallback="Circle" size={22} className="text-orange-400" />
                </div>
                <span className="text-[11px] tracking-[0.2em] text-orange-500/70 font-semibold">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-3 leading-snug">{a.title}</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>

        {/* Подпись под карточками */}
        <div className="mt-10 relative overflow-hidden rounded-sm border border-orange-500/20 bg-[#0e0e10]">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-500" />
          <div className="flex items-start gap-4 p-6 sm:p-7">
            <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-orange-500/10 flex items-center justify-center">
              <Icon name="Info" size={18} className="text-orange-400" />
            </div>
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
              Рулонный материал применяют на плоских, криволинейных и крупногабаритных поверхностях,
              где требуется раскрой по месту монтажа.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;