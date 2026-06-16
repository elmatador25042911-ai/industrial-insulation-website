import Icon from "@/components/ui/icon";

type Variant = {
  num: string;
  icon: string;
  title: string;
  text: string;
  specs: string[];
  image: string;
};

const VARIANTS: Variant[] = [
  {
    num: "01",
    icon: "Layers",
    title: "Стандарт",
    text: "Базовое исполнение системы шумоизоляции для инженерных коммуникаций жилых и общественных зданий.",
    specs: ["Толщина 12–16 мм", "1–5 слоёв", "R500 до 32 дБ"],
    image:
      "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/cbe3bf8a-5b6b-421d-ac96-e666c9ab9835.jpg",
  },
  {
    num: "02",
    icon: "Layers2",
    title: "Стандарт-AL",
    text: "Исполнение с алюминиевым покрытием для трубопроводов и воздуховодов на объектах с повышенными требованиями.",
    specs: ["Толщина 12–16 мм", "1–5 слоёв", "R500 до 32 дБ"],
    image:
      "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/282e4dfc-03b5-47c2-b7c2-a6540977cf08.jpg",
  },
  {
    num: "03",
    icon: "Layers3",
    title: "Премиум",
    text: "Усиленное исполнение без алюминиевого покрытия для снижения шума на ответственных участках инженерных систем.",
    specs: ["Толщина 12–16 мм", "1–5 слоёв", "R500 до 32 дБ"],
    image:
      "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/d598abb4-4970-4c0c-a80f-e25c8c907396.jpg",
  },
  {
    num: "04",
    icon: "Layers3",
    title: "Премиум-AL",
    text: "Усиленное исполнение с алюминиевым покрытием для максимального снижения шума на наиболее ответственных участках инженерных систем.",
    specs: ["Толщина 12–16 мм", "1–5 слоёв", "R500 до 32 дБ"],
    image:
      "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/3bf4e35c-8288-41aa-b682-c96bcfeaccce.jpg",
  },
];

const VariantCard = ({ v }: { v: Variant }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 flex flex-col"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-0 left-0 z-10 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    <div className="relative overflow-hidden border-b border-white/[0.08]">
      <img
        src={v.image}
        alt={`Система шумоизоляции ${v.title}`}
        loading="lazy"
        className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />
    </div>

    <div className="p-4 sm:p-5 flex flex-col flex-1">
    <div className="flex items-center gap-3 mb-1.5">
      <span
        className="text-[12px] tracking-[0.22em] text-orange-500/80 font-semibold"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {v.num}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
    </div>

    <div className="flex items-center gap-3 mb-3">
      <span className="relative w-9 h-9 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
        <Icon name={v.icon} size={17} className="text-orange-400" />
      </span>
      <h3
        className="flex-1 text-white text-[16px] sm:text-[17px] leading-[1.15]"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        }}
      >
        {v.title}
      </h3>
    </div>

    <p className="text-gray-400 text-[13px] leading-[1.6] mb-4">{v.text}</p>

    <div className="mt-auto space-y-0">
      {v.specs.map((s) => (
        <div
          key={s}
          className="flex items-center gap-2.5 py-2 border-t border-white/[0.06]"
        >
          <Icon name="Check" size={13} className="text-orange-400 flex-shrink-0" />
          <span className="text-gray-300 text-[12.5px] leading-snug">{s}</span>
        </div>
      ))}
    </div>
    </div>
  </article>
);

export const VariantsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
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
            <span className="cat-label text-orange-400/90">ИСПОЛНЕНИЯ</span>
          </div>
          <h2 className="cat-h2 text-white mb-5">
            Исполнения <span className="text-orange-500">систем</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Системы шумоизоляции выпускаются в четырёх исполнениях и подбираются
            под тип коммуникаций, требования к снижению шума и условия эксплуатации
            объекта.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {VARIANTS.map((v) => (
            <VariantCard key={v.title} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VariantsSection;