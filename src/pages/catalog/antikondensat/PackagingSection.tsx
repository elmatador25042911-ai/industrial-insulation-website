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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Текст и карточки */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="t-label text-orange-400/90 tracking-[0.18em]">
                ФАСОВКА
              </span>
            </div>
            <h2 className="t-h2 text-white mb-5">
              Доступные <span className="text-orange-500">объёмы поставки</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-[1.7] mb-4">
              Покрытие ЗМ.ПАНЦИРЬ.АК поставляется в пластиковой таре разных
              объёмов. Объём подбирается по площади нанесения, условиям объекта и
              требуемому количеству слоёв.
            </p>
            <p className="text-gray-400 text-[15px] sm:text-base leading-[1.7]">
              Маркировка V в обозначении продукта указывает на объём тары.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {VOLUMES.map((v) => (
                <article
                  key={v.volume}
                  className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-5 transition-colors duration-300 hover:border-orange-500/40"
                  style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
                >
                  <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative w-10 h-10 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center">
                      <Icon
                        name="PaintBucket"
                        size={18}
                        className="text-orange-400"
                      />
                    </span>
                    <span
                      className="text-white text-[18px] leading-none"
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
                  <p className="text-gray-400 text-[13px] leading-[1.65]">
                    {v.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Изображение банки */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
                style={{
                  background:
                    "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
                }}
              >
                <img
                  src={IMG}
                  alt="Тара покрытия ЗМ.ПАНЦИРЬ.АК"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
                <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
                <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-orange-500" />
                <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;