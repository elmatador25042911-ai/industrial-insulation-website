import Icon from "@/components/ui/icon";
import { glueCleanerImages, tapeImages } from "@/assets/montazhnye-materialy/assets";

type KitItem = {
  title: string;
  icon: string;
  img: string;
  alt: string;
  description: string;
  bullets: string[];
};

const ITEMS: KitItem[] = [
  {
    title: "Клей Unionflex",
    icon: "Droplet",
    img: glueCleanerImages.glueUnionflexPackaging01,
    alt: "Клей Unionflex для теплоизоляции",
    description:
      "Клей для склеивания трубной и рулонной изоляции из вспененного каучука при монтаже на судовых инженерных системах.",
    bullets: [
      "Склеивание продольных и поперечных стыков",
      "Монтаж трубной и рулонной изоляции",
      "Применение на подготовленных поверхностях",
    ],
  },
  {
    title: "Очиститель Unionflex",
    icon: "SprayCan",
    img: glueCleanerImages.cleanerUnionflexCan01,
    alt: "Очиститель Unionflex",
    description:
      "Очиститель для подготовки поверхностей, удаления загрязнений, обработки инструмента и работы с клеевыми составами.",
    bullets: [
      "Обезжиривание перед монтажом",
      "Очистка инструмента",
      "Подготовка поверхности под склеивание",
    ],
  },
  {
    title: "Стыковочные ленты Unionflex",
    icon: "Layers",
    img: tapeImages.cmSelfadhesiveFront01,
    alt: "Стыковочные ленты Unionflex",
    description:
      "Самоклеящиеся ленты для обработки стыков, швов и примыканий теплоизоляции.",
    bullets: [
      "Герметизация стыков",
      "Обработка швов и примыканий",
      "Подбор исполнения под покрытие изоляции",
    ],
  },
];

const KitCard = ({ item, index }: { item: KitItem; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 flex flex-col"
    style={{ boxShadow: "0 30px 80px -25px rgba(0,0,0,0.8)" }}
  >
    {/* Фото */}
    <div
      className="relative aspect-[4/3] overflow-hidden border-b border-white/10"
      style={{
        background:
          "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
      }}
    >
      <img
        src={item.img}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Виньетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 90%, rgba(10,10,12,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]/10 pointer-events-none" />

      {/* Оранжевые угловые акценты */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />

      {/* Номер */}
      <div
        className="absolute top-3 right-3 text-[11px] tracking-[0.2em] text-gray-300 px-2 py-1 rounded-sm border border-white/10 bg-black/40 backdrop-blur-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Тонкая оранжевая линия снизу */}
      <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
    </div>

    {/* Контент */}
    <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-9 h-9 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
          <Icon name={item.icon} size={16} className="text-orange-400" />
        </span>
        <h3
          className="text-white text-[19px] flex items-center"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            minHeight: "calc(2 * 1.2em)",
          }}
        >
          {item.title}
        </h3>
      </div>

      <p className="text-gray-400 text-[14px] leading-[1.65] mb-5">
        {item.description}
      </p>

      <ul className="space-y-2.5 mt-auto pt-4 border-t border-white/10">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span
              className="w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: "linear-gradient(135deg, #e63012, #f97316)" }}
            >
              <Icon name="Check" size={10} className="text-white" />
            </span>
            <span className="text-gray-300 text-[13.5px] leading-snug">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export const KitSection = () => {
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
        {/* Шапка */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">КОМПЛЕКТ</span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Состав монтажного <span className="text-orange-500">комплекта</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Монтажные материалы применяются при подготовке поверхностей, склеивании теплоизоляции,
            обработке стыков и герметизации швов при монтаже трубной и рулонной изоляции.
          </p>
        </div>

        {/* 3 карточки */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ITEMS.map((item, i) => (
            <KitCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitSection;