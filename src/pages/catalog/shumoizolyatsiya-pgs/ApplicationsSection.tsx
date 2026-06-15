import Icon from "@/components/ui/icon";

type App = {
  icon: string;
  title: string;
  text: string;
};

const APPLICATIONS: App[] = [
  {
    icon: "Waves",
    title: "Трубопроводы водоотведения",
    text: "Снижение воздушного шума от стояков и магистралей водоотведения в жилых и общественных зданиях.",
  },
  {
    icon: "Droplets",
    title: "Канализация и ливнестоки",
    text: "Шумоизоляция канализационных трубопроводов и систем ливневых стоков в зонах с нормируемым уровнем шума.",
  },
  {
    icon: "Wind",
    title: "Воздуховоды и венткамеры",
    text: "Снижение шума от воздуховодов и оборудования вентиляционных камер инженерных систем зданий.",
  },
  {
    icon: "Flame",
    title: "Газопроводы",
    text: "Шумоизоляция газопроводов на объектах промышленного и гражданского строительства.",
  },
  {
    icon: "Cog",
    title: "Компрессорные установки",
    text: "Снижение шума от компрессорного оборудования и связанных с ним трубопроводных участков.",
  },
  {
    icon: "Building2",
    title: "Жилые и общественные здания",
    text: "Доведение уровня воздушного шума инженерных коммуникаций до нормативных значений по СП 51.13330.2011.",
  },
];

const AppCard = ({ a, index }: { a: App; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-colors duration-300 hover:border-orange-500/40"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    <div className="flex items-center gap-3 mb-2">
      <span
        className="text-[12px] tracking-[0.22em] text-orange-500/80 font-semibold"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
    </div>

    <div className="flex items-center gap-3.5 mb-4">
      <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
        <Icon name={a.icon} size={20} className="text-orange-400" />
      </span>
      <h3
        className="flex-1 text-white text-[17px] sm:text-[18px] leading-[1.15]"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        }}
      >
        {a.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.65]">{a.text}</p>
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ПРИМЕНЕНИЕ</span>
          </div>
          <h2 className="cat-h2 text-white mb-5">
            Области <span className="text-orange-500">применения</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Системы шумоизоляции применяются на инженерных коммуникациях жилых,
            общественных и промышленных зданий для снижения воздушного шума до
            нормативных значений.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {APPLICATIONS.map((a, i) => (
            <AppCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
