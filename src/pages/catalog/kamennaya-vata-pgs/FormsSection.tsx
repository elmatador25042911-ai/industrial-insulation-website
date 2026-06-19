import Icon from "@/components/ui/icon";

type Form = { title: string; icon: string; text: string; tag: string };

const FORMS: Form[] = [
  {
    title: "Навивные цилиндры",
    icon: "Cylinder",
    text: "Готовые цилиндрические изделия для теплоизоляции прямых участков промышленных и технологических трубопроводов, систем отопления, водоснабжения и кондиционирования.",
    tag: "Для трубопроводов",
  },
  {
    title: "Лёгкие маты",
    icon: "Layers",
    text: "Гибкие маты для теплоизоляции промышленного оборудования, трубопроводов и инженерных систем зданий. Могут выпускаться без покрытия или с алюминиевой фольгой.",
    tag: "Для оборудования и коммуникаций",
  },
  {
    title: "Ламельные маты",
    icon: "AlignJustify",
    text: "Маты с ламельной структурой для цилиндрических, криволинейных и протяжённых поверхностей. Подходят для воздуховодов, трубопроводов и инженерных систем.",
    tag: "Для сложной геометрии",
  },
  {
    title: "Прошивные маты",
    icon: "Grid2x2",
    text: "Маты из каменной ваты с металлической сеткой и прошивкой для промышленного оборудования, трубопроводов, вентиляционных каналов, газоходов и высокотемпературных участков.",
    tag: "Для высоких температур",
  },
  {
    title: "Вырезные цилиндры",
    icon: "CircleDot",
    text: "Цилиндры из каменной ваты с вырезом для быстрого монтажа на трубопроводы и оборудование.",
    tag: "Для трубопроводов",
  },
];

const FormCard = ({ f, index }: { f: Form; index: number }) => (
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
        <Icon name={f.icon} size={20} className="text-orange-400" />
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
        {f.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.7] flex-1">{f.text}</p>

    {/* Короткая подпись — визуально отделена */}
    <div className="mt-5 pt-4 border-t border-white/10">
      <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] text-orange-400/90 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        {f.tag}
      </span>
    </div>
  </article>
);

export const FormsSection = () => {
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
            <span className="cat-label text-orange-400/90">ФОРМЫ ВЫПУСКА</span>
          </div>
          <h2 className="cat-h2 text-white">
            Основные виды технической изоляции{" "}
            <span className="text-orange-500">из каменной ваты</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Форма материала выбирается по геометрии изолируемой поверхности, температурному
            режиму, условиям монтажа и требованиям к наружному покрытию.
          </p>
        </div>

        {/* Сетка 3 + 2 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {FORMS.slice(0, 3).map((f, i) => (
            <FormCard key={f.title} f={f} index={i} />
          ))}
        </div>
        <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {FORMS.slice(3).map((f, i) => (
            <FormCard key={f.title} f={f} index={i + 3} />
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13.5px] leading-[1.6]">
            Каждый вид материала выпускается в различных плотностях, толщинах, размерах и
            исполнениях. Точные параметры будут приведены в технических и размерных блоках
            страницы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormsSection;