import Icon from "@/components/ui/icon";

type Item = { title: string; icon: string; text: string; tagLabel: string; tags: string[] };

const ITEMS: Item[] = [
  {
    title: "Прямые трубопроводы",
    icon: "Cylinder",
    text: "Для теплоизоляции прямых участков трубопроводов применяются готовые навивные цилиндры, подобранные по внутреннему диаметру и толщине стенки.",
    tagLabel: "Рекомендуемый вид",
    tags: ["Навивные цилиндры"],
  },
  {
    title: "Оборудование и сложная геометрия",
    icon: "Cog",
    text: "Для корпусов оборудования, арматуры, криволинейных и нестандартных поверхностей применяются гибкие маты, которые можно адаптировать к форме основания.",
    tagLabel: "Рекомендуемые виды",
    tags: ["Лёгкие маты", "Ламельные маты"],
  },
  {
    title: "Вентиляция и газоходы",
    icon: "Wind",
    text: "Для воздуховодов, вентиляционных каналов и газоходов применяются маты, подходящие для протяжённых поверхностей и конструкций сложной формы.",
    tagLabel: "Рекомендуемые виды",
    tags: ["Ламельные маты", "Прошивные маты"],
  },
  {
    title: "Высокотемпературные участки",
    icon: "Flame",
    text: "Для промышленного оборудования и трубопроводов с повышенной температурой применяются плотные прошивные маты с металлической сеткой или высокотемпературные цилиндры.",
    tagLabel: "Рекомендуемые виды",
    tags: ["Прошивные маты", "Навивные цилиндры"],
  },
  {
    title: "Финишное покрытие",
    icon: "Layers",
    text: "Для защиты поверхности, упрощения монтажа и формирования аккуратного наружного слоя применяются исполнения с алюминиевой фольгой, металлической сеткой или специальным наружным покрытием.",
    tagLabel: "Рекомендуемые исполнения",
    tags: ["Фольга", "Сетка", "Наружное покрытие"],
  },
];

const SelectionCard = ({ item, index }: { item: Item; index: number }) => (
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
        <Icon name={item.icon} size={20} className="text-orange-400" />
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
        {item.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.7] flex-1">{item.text}</p>

    {/* Рекомендуемые виды — теги */}
    <div className="mt-5 pt-4 border-t border-white/10">
      <div className="text-[11px] tracking-[0.18em] text-gray-500 uppercase mb-2.5">
        {item.tagLabel}
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/[0.07] text-[12px] text-orange-300 tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            {t}
          </span>
        ))}
      </div>
    </div>
  </article>
);

export const SelectionSection = () => {
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ПОДБОР МАТЕРИАЛА</span>
          </div>
          <h2 className="cat-h2 text-white">
            Как выбрать вид{" "}
            <span className="text-orange-500">технической изоляции</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Вид материала выбирается по форме изолируемой поверхности, рабочей температуре,
            условиям эксплуатации, требованиям к пожарной безопасности и способу монтажа.
          </p>
        </div>

        {/* Верхний ряд — 3 карточки */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ITEMS.slice(0, 3).map((item, i) => (
            <SelectionCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Нижний ряд — 2 широкие карточки */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {ITEMS.slice(3).map((item, i) => (
            <SelectionCard key={item.title} item={item} index={i + 3} />
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13.5px] leading-[1.6]">
            Окончательный подбор выполняется по температуре поверхности, диаметру или геометрии
            объекта, требуемой толщине изоляции, условиям эксплуатации и необходимости наружного
            защитного слоя.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;
