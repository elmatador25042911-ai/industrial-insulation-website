import Icon from "@/components/ui/icon";

type Maker = { title: string; icon: string; text: string; directions: string[] };

const MAKERS: Maker[] = [
  {
    title: "ROCKWOOL / RWL",
    icon: "Factory",
    text: "Навивные цилиндры, лёгкие маты, ламельные маты и прошивные маты с металлической сеткой для трубопроводов, оборудования, инженерных систем зданий, вентиляции и высокотемпературных участков.",
    directions: ["Навивные цилиндры", "Лёгкие и ламельные маты", "Прошивные маты"],
  },
  {
    title: "ЮМАТЕКС ТЕРМО",
    icon: "Flame",
    text: "Прошивные маты из каменной ваты для теплоизоляции и огнезащиты промышленного оборудования, трубопроводов, газоходов, вентиляционных каналов и поверхностей сложной формы.",
    directions: ["Прошивные маты", "Высокотемпературная изоляция", "Тепло- и огнезащита"],
  },
  {
    title: "HOTPIPE",
    icon: "Cylinder",
    text: "Минераловатные цилиндры для магистральных, технологических и инженерных трубопроводов. Доступны исполнения без покрытия, с алюминиевой фольгой, наружным защитным покрытием и металлической окожушкой.",
    directions: [
      "Цилиндры без покрытия",
      "Фольгированные исполнения",
      "Исполнения для наружного монтажа",
    ],
  },
];

const MakerCard = ({ m, index }: { m: Maker; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 p-6 sm:p-7 flex flex-col h-full"
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
        <Icon name={m.icon} size={20} className="text-orange-400" />
      </span>
      <h3
        className="text-white text-[16px] sm:text-[17px] leading-tight"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
        }}
      >
        {m.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.7] flex-1">{m.text}</p>

    {/* Направления */}
    <div className="mt-5 pt-4 border-t border-white/10">
      <div className="text-[11px] tracking-[0.18em] text-gray-500 uppercase mb-3">
        Направления
      </div>
      <ul className="space-y-2">
        {m.directions.map((d) => (
          <li key={d} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
            <span className="text-gray-300 text-[13px] leading-snug">{d}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export const ManufacturersSection = () => {
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
            <span className="cat-label text-orange-400/90">ПРОИЗВОДИТЕЛИ И РЕШЕНИЯ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Доступные решения{" "}
            <span className="text-orange-500">из каменной ваты</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Для объектов промышленности и ПГС доступны технические решения нескольких
            производителей. Линейки отличаются формой выпуска, плотностью, температурным режимом,
            конструкцией покрытия и доступными размерами.
          </p>
        </div>

        {/* 3 карточки в ряд */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {MAKERS.map((m, i) => (
            <MakerCard key={m.title} m={m} index={i} />
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13.5px] leading-[1.6]">
            Производитель и конкретное исполнение выбираются после определения температуры
            поверхности, диаметра или геометрии объекта, необходимой толщины изоляции, требований
            к покрытию и условий эксплуатации.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManufacturersSection;
