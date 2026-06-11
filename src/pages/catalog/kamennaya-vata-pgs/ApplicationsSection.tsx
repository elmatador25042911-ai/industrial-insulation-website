import Icon from "@/components/ui/icon";

type App = { title: string; icon: string; text: string; materials: string };

const APPS: App[] = [
  {
    title: "Промышленные трубопроводы",
    icon: "Cylinder",
    text: "Теплоизоляция прямых участков технологических и магистральных трубопроводов, а также трубопроводов производственных систем.",
    materials: "Навивные цилиндры",
  },
  {
    title: "Отопление и водоснабжение",
    icon: "Droplets",
    text: "Изоляция трубопроводов отопления, горячего и холодного водоснабжения, водоотведения и инженерных коммуникаций зданий.",
    materials: "Навивные цилиндры / лёгкие маты",
  },
  {
    title: "Промышленное оборудование",
    icon: "Cog",
    text: "Теплоизоляция корпусов оборудования, аппаратов, технологических установок и поверхностей сложной формы.",
    materials: "ТЕХ МАТ / прошивные маты",
  },
  {
    title: "Вентиляция и воздуховоды",
    icon: "Wind",
    text: "Тепло- и огнезащита воздуховодов, вентиляционных каналов и элементов систем кондиционирования.",
    materials: "Ламельные маты / прошивные маты",
  },
  {
    title: "Газоходы и высокие температуры",
    icon: "Flame",
    text: "Изоляция газоходов, дымовых каналов и участков оборудования, работающих при повышенных температурах.",
    materials: "ВАЙРЕД МАТ / ЮМАТЕКС ТЕРМО",
  },
  {
    title: "Резервуары и ёмкости",
    icon: "CircleDashed",
    text: "Изоляция цилиндрических, плоских и криволинейных поверхностей резервуаров, баков и технологических ёмкостей.",
    materials: "Лёгкие / ламельные / прошивные маты",
  },
];

const AppCard = ({ a, index }: { a: App; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 p-6 flex flex-col h-full"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
    <div
      className="absolute top-4 right-4 text-[11px] tracking-[0.2em] text-gray-500"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>

    <div className="flex items-center gap-3 mb-4 mt-1 pr-10">
      <span className="w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={a.icon} size={20} className="text-orange-400" />
      </span>
      <h3
        className="text-white text-[15px] sm:text-[16px] leading-tight"
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

    <p className="text-gray-400 text-[13.5px] leading-[1.65] flex-1">{a.text}</p>

    <div className="mt-5 pt-4 border-t border-white/10">
      <div className="text-[11px] tracking-[0.18em] text-gray-500 uppercase mb-2">
        Подходящие материалы
      </div>
      <span className="inline-flex items-center gap-2 text-[12.5px] text-orange-300 tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
        {a.materials}
      </span>
    </div>
  </article>
);

export const ApplicationsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[160px]" />
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
            <span className="cat-label text-orange-400/90">ОБЛАСТИ ПРИМЕНЕНИЯ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Где применяется техническая изоляция{" "}
            <span className="text-orange-500">из каменной ваты</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Цилиндры и маты из каменной ваты применяются для теплоизоляции промышленных и
            технологических систем. Вид материала подбирается по геометрии поверхности,
            температурному режиму, условиям эксплуатации и требованиям к пожарной безопасности.
          </p>
        </div>

        {/* Сетка 3 × 2 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {APPS.map((a, i) => (
            <AppCard key={a.title} a={a} index={i} />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13.5px] leading-[1.6]">
            Окончательный выбор материала выполняется по рабочей температуре, форме поверхности,
            требуемой толщине изоляции, условиям монтажа и необходимости наружного защитного
            покрытия.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
