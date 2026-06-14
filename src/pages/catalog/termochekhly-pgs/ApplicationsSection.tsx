import Icon from "@/components/ui/icon";

type App = {
  icon: string;
  title: string;
  text: string;
};

const APPLICATIONS: App[] = [
  {
    icon: "Flame",
    title: "Котельные и теплопункты",
    text: "Съёмная изоляция арматуры, коллекторов и оборудования котельных, ИТП и ЦТП с доступом для обслуживания.",
  },
  {
    icon: "Disc",
    title: "Фланцевые соединения",
    text: "Изоляция фланцевых узлов трубопроводов с сохранением возможности демонтажа при осмотре и ремонте.",
  },
  {
    icon: "ToggleRight",
    title: "Клапаны и задвижки",
    text: "Применение на запорной и регулирующей арматуре инженерных систем зданий и промышленных объектов.",
  },
  {
    icon: "Cog",
    title: "Промышленное оборудование",
    text: "Изоляция насосов, аппаратов и узлов оборудования заводов, где требуется доступ для регламентного обслуживания.",
  },
  {
    icon: "Workflow",
    title: "Трубопроводные узлы",
    text: "Применение на сложных участках технологических и магистральных трубопроводов, затрудняющих постоянную изоляцию.",
  },
  {
    icon: "Building2",
    title: "Инженерные системы зданий",
    text: "Изоляция узлов систем отопления, водоснабжения и теплоснабжения в гражданском строительстве.",
  },
  {
    icon: "Factory",
    title: "Промышленные объекты",
    text: "Использование на производственных площадках, заводах и технологических установках с повышенными температурами.",
  },
  {
    icon: "Container",
    title: "Теплообменники и ёмкости",
    text: "Съёмная изоляция теплообменного оборудования, резервуаров и корпусных элементов по параметрам объекта.",
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
            Применение термочехлов{" "}
            <span className="text-orange-500">
              в промышленности и гражданском строительстве
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Термочехлы применяются на объектах ПГС, где требуется съёмная изоляция,
            доступ к оборудованию для обслуживания и защита персонала при эксплуатации
            котельных, тепловых пунктов, заводов и инженерных систем зданий.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {APPLICATIONS.map((a, i) => (
            <AppCard key={a.title} a={a} index={i} />
          ))}
        </div>

        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Конструкция термочехла подбирается под форму узла, температурный режим,
            условия эксплуатации и требования к доступу для обслуживания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
