import Icon from "@/components/ui/icon";
import { tapeImages } from "@/assets/montazhnye-materialy/assets";

type Tape = {
  code: string;
  img: string;
  alt: string;
  description: string;
};

const TAPES: Tape[] = [
  {
    code: "CM",
    img: tapeImages.cmSelfadhesiveFront01,
    alt: "Стыковочная лента Unionflex CM",
    description:
      "Самоклеящаяся лента для обработки стыков теплоизоляции без дополнительного наружного покрытия.",
  },
  {
    code: "METALL",
    img: tapeImages.metallGridAngle01,
    alt: "Стыковочная лента Unionflex METALL",
    description:
      "Лента с покрытием из армированной алюминиевой фольги для стыков материалов с покрытием METALL.",
  },
  {
    code: "TITAN",
    img: tapeImages.titanSmoothAngle01,
    alt: "Стыковочная лента Unionflex TITAN",
    description:
      "Лента с наружным защитным слоем для стыков материалов в исполнении TITAN.",
  },
  {
    code: "ALU",
    img: tapeImages.aluSmoothAngle01,
    alt: "Стыковочная лента Unionflex ALU",
    description:
      "Лента с алюминиевым покрытием для обработки стыков материалов с наружным слоем ALU.",
  },
  {
    code: "PROM FORMA",
    img: tapeImages.promformaBlackAngle01,
    alt: "Стыковочная лента Unionflex PROM FORMA",
    description:
      "Лента с покрытием из чёрной стеклоткани для стыков материалов PROM FORMA.",
  },
  {
    code: "PROM FORMA FOIL",
    img: tapeImages.promformaFoilTextureAngle01,
    alt: "Стыковочная лента Unionflex PROM FORMA FOIL",
    description:
      "Лента с покрытием из стеклоткани и алюминиевой фольги для стыков материалов PROM FORMA FOIL.",
  },
];

const TapeCard = ({ tape, index }: { tape: Tape; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 flex flex-col"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    {/* Фото */}
    <div
      className="relative aspect-[4/3] overflow-hidden border-b border-white/10"
      style={{
        background:
          "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.08) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
      }}
    >
      <img
        src={tape.img}
        alt={tape.alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Виньетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(10,10,12,0.5) 90%, rgba(10,10,12,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]/10 pointer-events-none" />

      {/* Угловые акценты */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />

      {/* Индекс */}
      <div
        className="absolute top-3 right-3 text-[11px] tracking-[0.2em] text-gray-300 px-2 py-1 rounded-sm border border-white/10 bg-black/40 backdrop-blur-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
    </div>

    {/* Контент */}
    <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-10 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
          <Icon name="Layers" size={18} className="text-orange-400" />
        </span>
        <h3
          className="text-white text-[22px] sm:text-[26px] leading-[1.05]"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {tape.code}
        </h3>
      </div>

      <span className="h-px w-10 bg-orange-500/60 mb-4" />

      <p className="text-gray-400 text-[14px] leading-[1.65]">
        {tape.description}
      </p>
    </div>
  </article>
);

export const TapesSection = () => {
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
            <span className="cat-label text-orange-400/90">ЛЕНТЫ</span>
          </div>
          <h2 className="cat-h2 text-white mb-5">
            Стыковочные ленты <span className="text-orange-500">Unionflex</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Самоклеящиеся ленты применяются для обработки стыков, швов и примыканий
            теплоизоляции. Исполнение ленты подбирают под наружное покрытие изоляционного
            материала.
          </p>
        </div>

        {/* Сетка 3×2 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TAPES.map((tape, i) => (
            <TapeCard key={tape.code} tape={tape} index={i} />
          ))}
        </div>

        {/* Техническая подпись */}
        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Ленту подбирают по типу наружного покрытия, ширине стыка, условиям эксплуатации
            и требованиям к герметизации шва.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TapesSection;