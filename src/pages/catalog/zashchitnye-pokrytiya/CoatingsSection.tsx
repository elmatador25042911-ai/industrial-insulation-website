import Icon from "@/components/ui/icon";
import { coveringImages } from "@/assets/zashchitnye-pokrytiya/assets";

type Coating = {
  name: string;
  desc: string;
  img: string;
};

const COATINGS: Coating[] = [
  {
    name: "METALL",
    desc: "Армированная алюминиевая фольга для защиты теплоизоляции от влаги, аэрозолей и внешних воздействий.",
    img: coveringImages.metallSheetAngle01,
  },
  {
    name: "TITAN",
    desc: "Комбинированное покрытие на основе ПВХ, алюминиевой фольги и ПЭТФ-плёнки для эксплуатации на открытых участках.",
    img: coveringImages.titanSheetAngle01,
  },
  {
    name: "PROM FORMA",
    desc: "Покрытие из чёрной стеклоткани для условий, где требуется дополнительная механическая защита.",
    img: coveringImages.promformaSheetAngle01,
  },
  {
    name: "PROM FORMA FOIL",
    desc: "Покрытие из стеклоткани и алюминиевой фольги для защиты изоляции при повышенных эксплуатационных нагрузках.",
    img: coveringImages.promformaFoilSheetAngle01,
  },
  {
    name: "ALU",
    desc: "Алюминиевое покрытие с ПЭТФ-плёнкой для защиты наружного слоя теплоизоляции.",
    img: coveringImages.aluTextureClose01,
  },
];

const CoatingCard = ({ c }: { c: Coating }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40"
    style={{ boxShadow: "0 20px 60px -25px rgba(0,0,0,0.8)" }}
  >
    {/* Фото */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={c.img}
        alt={`Защитное покрытие ${c.name}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
      />
      {/* Тёмный градиент снизу */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-[#0a0a0a]/20 to-transparent pointer-events-none" />
      {/* Сетка */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Угловые акценты */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />

      {/* Бейдж с названием поверх фото */}
      <div className="absolute left-5 bottom-5 right-5">
        <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-orange-500" />
          <span className="cat-label text-orange-400/90 text-[11px]">ПОКРЫТИЕ</span>
        </div>
        <h3
          className="text-white text-[20px] sm:text-[22px] mt-1.5 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: "0.01em" }}
        >
          {c.name}
        </h3>
      </div>
    </div>

    {/* Описание */}
    <div className="p-6">
      <p className="text-gray-400 text-[14px] leading-[1.65]">{c.desc}</p>
    </div>
  </article>
);

export const CoatingsSection = () => {
  const top = COATINGS.slice(0, 3);
  const bottom = COATINGS.slice(3);

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
        {/* Шапка блока */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ПОКРЫТИЯ</span>
          </div>
          <h2 className="cat-h2 text-white mb-5">
            Исполнения{" "}
            <span className="text-orange-500">защитных покрытий</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Покрытия применяются как наружный слой теплоизоляции и подбираются по условиям
            эксплуатации: влажность, механические воздействия, ультрафиолет, открытые участки и
            требования к внешней защите поверхности.
          </p>
        </div>

        {/* Сетка карточек: 3 сверху, 2 снизу — равной ширины (lg: половина) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {top.map((c) => (
            <CoatingCard key={c.name} c={c} />
          ))}
        </div>

        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {bottom.map((c) => (
            <CoatingCard key={c.name} c={c} />
          ))}
        </div>

        {/* Сноска по применению */}
        <div className="mt-12 flex items-start gap-3 text-gray-500 text-[13px] leading-relaxed max-w-3xl">
          <Icon name="Info" size={16} className="text-orange-400/80 mt-0.5 flex-shrink-0" />
          <p>
            Подбор исполнения покрытия выполняется по параметрам объекта — типу поверхности,
            температурному режиму и условиям эксплуатации.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoatingsSection;