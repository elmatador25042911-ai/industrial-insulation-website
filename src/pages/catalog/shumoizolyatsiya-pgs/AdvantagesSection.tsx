import Icon from "@/components/ui/icon";

type Advantage = {
  icon: string;
  title: string;
  text: string;
};

const ADVANTAGES: Advantage[] = [
  {
    icon: "SlidersHorizontal",
    title: "Гибкость уровня изоляции",
    text: "Возможность выбора от 1 до 5 слоёв позволяет подобрать оптимальное решение под требуемый уровень шумоизоляции и бюджет.",
  },
  {
    icon: "BadgeCheck",
    title: "Соответствие нормам",
    text: "Снижает шум до нормативных значений по СП 51.13330.2011 «Защита от шума».",
  },
  {
    icon: "Wrench",
    title: "Простой монтаж",
    text: "Материалы легко режутся и монтируются без специального оборудования и квалифицированных специалистов.",
  },
  {
    icon: "Ruler",
    title: "Компактность",
    text: "Толщина системы всего 12–16 мм, не занимает много места в инженерных шахтах и помещениях.",
  },
  {
    icon: "LayoutGrid",
    title: "Универсальность применения",
    text: "Подходит для трубопроводов водоотведения, воздуховодов, газопроводов, венткамер и промышленных объектов.",
  },
];

const AdvantageCard = ({ a, index }: { a: Advantage; index: number }) => (
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

export const AdvantagesSection = () => {
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
            <span className="cat-label text-orange-400/90">ПРЕИМУЩЕСТВА</span>
          </div>
          <h2 className="cat-h2 text-white mb-5">
            Преимущества <span className="text-orange-500">систем</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Ключевые преимущества систем шумоизоляции инженерных коммуникаций для
            объектов жилого, общественного и промышленного назначения.
          </p>
        </div>

        <div className="mt-12 space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ADVANTAGES.slice(0, 3).map((a, i) => (
              <AdvantageCard key={a.title} a={a} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:max-w-[66.666%] lg:mx-auto">
            {ADVANTAGES.slice(3).map((a, i) => (
              <AdvantageCard key={a.title} a={a} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;