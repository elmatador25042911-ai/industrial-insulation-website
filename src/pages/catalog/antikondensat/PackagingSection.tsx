import Icon from "@/components/ui/icon";

const IMG =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/antikondensat/akvaros_antikondensat_bucket_3l_01.png";

const VOLUMES = [
  {
    volume: "V 3 л",
    text: "Для небольших участков, локальной обработки и пробного нанесения.",
  },
  {
    volume: "V 10 л",
    text: "Для средних объёмов работ на трубопроводах, оборудовании и отдельных технических зонах.",
  },
  {
    volume: "V 20 л",
    text: "Для крупных участков и комплексной обработки поверхностей на объекте.",
  },
];

const PackagingSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      {/* Фоновое свечение */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ak-section">
        {/* Заголовок */}
        <div className="ak-head">
          <div className="ak-label-row">
            <span className="h-px w-10 bg-orange-500" />
            <span className="ak-label text-orange-400/90">ФАСОВКА</span>
          </div>
          <h2 className="ak-h2 text-white">
            Доступные <span className="text-orange-500">объёмы поставки</span>
          </h2>
          <p className="ak-lead text-gray-300 mb-3">
            Покрытие ЗМ.ПАНЦИРЬ.АК поставляется в пластиковой таре разных
            объёмов. Объём подбирается по площади нанесения, условиям объекта и
            требуемому количеству слоёв.
          </p>
          <p className="ak-text text-gray-400">
            Маркировка V в обозначении продукта указывает на объём тары.
          </p>
        </div>

        {/* Продуктовая витрина + варианты */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Продукт */}
          <div className="lg:col-span-5 order-1">
            <div className="relative h-full">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
              <div
                className="relative h-full min-h-[340px] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col"
                style={{
                  background:
                    "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
                }}
              >
                {/* Фото тары */}
                <div className="relative flex-1">
                  <img
                    src={IMG}
                    alt="Тара покрытия ЗМ.ПАНЦИРЬ.АК"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-8"
                  />
                </div>
                {/* Подпись продукта */}
                <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm px-6 py-4 flex items-center justify-between gap-3">
                  <div>
                    <div
                      className="text-[11px] tracking-[0.22em] text-gray-400 uppercase"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Продукт
                    </div>
                    <div
                      className="text-white text-[15px] leading-tight mt-1"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      }}
                    >
                      ЗМ.ПАНЦИРЬ.АК
                    </div>
                  </div>
                  <span className="text-[12px] tracking-[0.18em] text-orange-300 border border-orange-500/40 bg-orange-500/[0.08] rounded-sm px-3 py-1.5 whitespace-nowrap">
                    3 / 10 / 20 л
                  </span>
                </div>
                <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
                <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-orange-500" />
              </div>
            </div>
          </div>

          {/* Варианты объёмов */}
          <div className="lg:col-span-7 order-2 flex flex-col gap-4">
            {VOLUMES.map((v) => (
              <article
                key={v.volume}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-5 sm:p-6 flex items-center gap-5 transition-colors duration-300 hover:border-orange-500/40"
                style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
              >
                <div className="absolute top-0 left-0 h-full w-[3px] bg-orange-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Крупный объём */}
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-20 sm:w-24 border-r border-white/10 pr-5">
                  <Icon
                    name="PaintBucket"
                    size={20}
                    className="text-orange-400 mb-1.5"
                  />
                  <span
                    className="text-white text-[19px] sm:text-[21px] leading-none whitespace-nowrap"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                    }}
                  >
                    {v.volume}
                  </span>
                </div>
                {/* Описание */}
                <p className="ak-card-text text-gray-300 flex-1">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;