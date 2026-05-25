import Icon from "@/components/ui/icon";

type Application = {
  icon: string;
  title: string;
  desc: string;
};

const APPLICATIONS: Application[] = [
  {
    icon: "Pipette",
    title: "Судовые трубопроводы",
    desc: "Наружная защита теплоизоляции трубопроводов судовых инженерных систем.",
  },
  {
    icon: "Wind",
    title: "Воздуховоды и вентиляционные каналы",
    desc: "Защита изоляции на участках вентиляции, кондиционирования и распределения воздуха.",
  },
  {
    icon: "Flame",
    title: "Машинные и котельные отделения",
    desc: "Применение в технических помещениях с повышенными эксплуатационными нагрузками.",
  },
  {
    icon: "CloudRain",
    title: "Наружные участки трасс",
    desc: "Защита теплоизоляции на открытых участках, подверженных влаге, ультрафиолету и атмосферным воздействиям.",
  },
  {
    icon: "Database",
    title: "Резервуары и технологические поверхности",
    desc: "Наружный защитный слой для изоляции ёмкостей, баков и крупногабаритных поверхностей.",
  },
  {
    icon: "Anchor",
    title: "Верфи, доки, судоремонт",
    desc: "Применение при строительстве, ремонте, переоборудовании и обслуживании судов.",
  },
];

const ApplicationCard = ({ a }: { a: Application }) => (
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
      {/* Иконка */}
      <div className="w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center mb-5">
        <Icon name={a.icon} size={20} className="text-orange-400" />
      </div>

      {/* Заголовок */}
      <h3
        className="text-white text-[17px] sm:text-[18px] leading-tight mb-3"
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase" }}
      >
        {a.title}
      </h3>

      {/* Описание */}
      <p className="text-gray-400 text-[14px] leading-[1.65]">{a.desc}</p>
    </div>
  </article>
);

export const ApplicationsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
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
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ПРИМЕНЕНИЕ</span>
          </div>
          <h2 className="t-h2 text-white">
            Области применения{" "}
            <span className="text-orange-500">в судостроении</span>
          </h2>
        </div>

        {/* Сетка карточек */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {APPLICATIONS.map((a) => (
            <ApplicationCard key={a.title} a={a} />
          ))}
        </div>

        {/* Техническая подпись */}
        <div className="mt-12 flex items-start gap-3 text-gray-500 text-[13px] sm:text-[14px] leading-relaxed max-w-4xl">
          <Icon name="Info" size={16} className="text-orange-400/80 mt-0.5 flex-shrink-0" />
          <p>
            Тип покрытия подбирают по условиям эксплуатации: влажность, механические воздействия,
            открытый воздух, требования к внешнему слою и доступность участка для обслуживания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
