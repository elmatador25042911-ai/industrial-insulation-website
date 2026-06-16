import Icon from "@/components/ui/icon";

type Application = { title: string; icon: string; text: string };

const APPLICATIONS: Application[] = [
  {
    title: "Трубопроводы",
    icon: "Pipette",
    text: "Защита теплоизоляции на прямых участках трубопроводов, магистралях, технологических линиях и инженерных коммуникациях.",
  },
  {
    title: "Воздуховоды и вентиляция",
    icon: "Wind",
    text: "Наружная защита изоляции на воздуховодах, вентиляционных каналах и элементах систем кондиционирования.",
  },
  {
    title: "Оборудование",
    icon: "Cog",
    text: "Применение на корпусах оборудования, технологических узлах и поверхностях, где требуется защитить изоляционный слой.",
  },
  {
    title: "Резервуары и ёмкости",
    icon: "Cylinder",
    text: "Защита изоляции на цилиндрических, плоских и криволинейных поверхностях резервуаров, баков и ёмкостей.",
  },
  {
    title: "Наружные участки",
    icon: "CloudSun",
    text: "Использование на открытых участках, где изоляция подвергается влаге, УФ-излучению, осадкам и механическим воздействиям.",
  },
];

const ApplicationCard = ({ a, index }: { a: Application; index: number }) => (
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
        <Icon name={a.icon} size={18} className="text-orange-400" />
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
        {a.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.7]">{a.text}</p>

    {/* Тонкая оранжевая линия снизу */}
    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
  </article>
);

export const ApplicationsSection = () => {
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
            <span className="cat-label text-orange-400/90">ОБЛАСТИ ПРИМЕНЕНИЯ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Где применяются{" "}
            <span className="text-orange-500">защитные материалы</span>
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-6">
            Защитные материалы ЗМ.ПАНЦИРЬ применяются как наружный покровный слой на
            теплоизоляционных конструкциях в инженерных системах зданий, промышленных объектах и
            технических помещениях. Материал подбирается по типу поверхности, условиям
            эксплуатации и требуемому уровню защиты.
          </p>
        </div>

        {/* Сетка: ряд 3 + ряд 2 (центрированный) */}
        <div className="mt-12 space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {APPLICATIONS.slice(0, 3).map((a, i) => (
              <ApplicationCard key={a.title} a={a} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:max-w-[66.666%] lg:mx-auto">
            {APPLICATIONS.slice(3).map((a, i) => (
              <ApplicationCard key={a.title} a={a} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;