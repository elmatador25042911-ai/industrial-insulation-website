import { coveringImages, rollImages } from "@/assets/rulonnaya-izolyaciya/assets";

type Coating = {
  num: string;
  code: string;
  title: string;
  img: string;
};

const COATINGS: Coating[] = [
  {
    num: "01",
    code: "STD",
    title: "Стандартный рулонный материал без дополнительного покрытия.",
    img: rollImages.stdSingle01,
  },
  {
    num: "02",
    code: "CM",
    title: "Рулонный материал с самоклеящимся слоем для ускоренного монтажа.",
    img: coveringImages.cmSheetAngle01,
  },
  {
    num: "03",
    code: "METALL",
    title: "Покрытие из армированной алюминиевой фольги для дополнительной защиты поверхности.",
    img: coveringImages.metallSheetAngle01,
  },
  {
    num: "04",
    code: "TITAN",
    title: "Комбинированное защитное покрытие на основе ПВХ, алюминиевой фольги и ПЭТФ-плёнки.",
    img: coveringImages.titanSheetAngle01,
  },
  {
    num: "05",
    code: "PROM FORMA",
    title: "Покрытие из стеклоткани для эксплуатации в условиях повышенных механических нагрузок.",
    img: coveringImages.promformaSheetAngle01,
  },
  {
    num: "06",
    code: "PROM FORMA FOIL",
    title: "Покрытие из стеклоткани и алюминиевой фольги для дополнительной защиты изолируемой поверхности.",
    img: coveringImages.promformaFoilSheetAngle01,
  },
];

const ALU: Coating = {
  num: "07",
  code: "ALU",
  title: "Алюминиевое покрытие с ПЭТФ-плёнкой для защиты рулонной изоляции.",
  img: coveringImages.aluTextureClose01,
};

export const CoatingsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="t-label text-orange-400/90 tracking-[0.18em]">ПОКРЫТИЯ</span>
        </div>
        <h2 className="t-h2 text-white mb-12 max-w-3xl">
          Исполнения <span className="text-orange-500">покрытий</span>
        </h2>

        {/* Сетка 3×2 для первых 6 исполнений */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {COATINGS.map((c) => (
            <div
              key={c.code}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#101012] transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
            >
              {/* Фото */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{
                  background:
                    "radial-gradient(120% 90% at 30% 0%, rgba(255,138,0,0.08) 0%, rgba(20,20,22,0.85) 50%, rgba(10,10,12,0.95) 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <img
                  src={c.img}
                  alt={c.code}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 90%, rgba(10,10,12,0.9) 100%)",
                  }}
                />
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-orange-500" />
                <div className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
              </div>

              {/* Текстовая часть */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] tracking-[0.22em] text-orange-500/70 font-semibold">
                    {c.num}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-white text-xl font-bold tracking-wide mb-2">{c.code}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">{c.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Широкая карточка ALU */}
        <div className="mt-4 sm:mt-5">
          <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#101012] transition-all duration-300 hover:border-orange-500/50">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Фото слева */}
              <div className="md:col-span-5 lg:col-span-4">
                <div
                  className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 30% 0%, rgba(255,138,0,0.08) 0%, rgba(20,20,22,0.85) 50%, rgba(10,10,12,0.95) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <img
                    src={ALU.img}
                    alt={ALU.code}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 90%, rgba(10,10,12,0.9) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-orange-500" />
                  <div className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent md:hidden" />
                  <div className="hidden md:block absolute top-4 bottom-4 right-0 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />
                </div>
              </div>

              {/* Текст справа */}
              <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] tracking-[0.22em] text-orange-500/70 font-semibold">
                    {ALU.num}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-white text-2xl sm:text-[28px] font-bold tracking-wide mb-3">
                  {ALU.code}
                </h3>
                <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl">
                  {ALU.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoatingsSection;
