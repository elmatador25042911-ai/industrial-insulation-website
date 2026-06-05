import Icon from "@/components/ui/icon";

const IMG_MAIN =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/antikondensat/akvaros_antikondensat_industrial_node_01.png";
const IMG_SECOND =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/antikondensat/akvaros_antikondensat_technical_room_01.png";

const CARDS = [
  {
    icon: "Brush",
    title: "После высыхания",
    text: "Формирует ровный белый защитный слой на поверхности оборудования и трубопроводов.",
  },
  {
    icon: "Workflow",
    title: "Сложные узлы",
    text: "Подходит для арматуры, фасонных элементов и участков со сложной геометрией.",
  },
  {
    icon: "Ship",
    title: "Технические помещения",
    text: "Применяется в инженерных и судовых технических помещениях с повышенным риском образования конденсата.",
  },
];

const ResultSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      {/* Фоновое свечение */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Текст и карточки */}
          <div className="lg:col-span-6 order-2 lg:order-none">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="t-label text-orange-400/90 tracking-[0.18em]">
                РЕЗУЛЬТАТ / ОБЪЕКТ
              </span>
            </div>
            <h2 className="t-h2 text-white mb-5">
              Как покрытие выглядит после высыхания и{" "}
              <span className="text-orange-500">где применяется</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-[1.7] mb-4">
              После высыхания ЗМ.ПАНЦИРЬ.АК формирует белый защитный слой на
              поверхности трубопроводов, арматуры и оборудования. Покрытие
              повторяет геометрию узла и может применяться на прямых участках,
              фасонных элементах и сложных участках инженерных систем.
            </p>
            <p className="text-gray-400 text-[15px] sm:text-base leading-[1.7]">
              Материал используется в судовых технических помещениях, на
              трубопроводных линиях, узлах с арматурой, а также на оборудовании,
              где требуется снижение риска образования конденсата на
              металлической поверхности.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CARDS.map((c) => (
                <article
                  key={c.title}
                  className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-5 transition-colors duration-300 hover:border-orange-500/40"
                  style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
                >
                  <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                  <span className="relative w-10 h-10 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center mb-3">
                    <Icon name={c.icon} size={18} className="text-orange-400" />
                  </span>
                  <h3
                    className="text-white text-[15px] leading-[1.2] mb-2"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.01em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-[13px] leading-[1.65]">
                    {c.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Изображения */}
          <div className="lg:col-span-6 order-1 lg:order-none">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5">
              {/* Крупное */}
              <div className="sm:col-span-12 relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] bg-[#0c0c0e]">
                  <img
                    src={IMG_MAIN}
                    alt="Антиконденсатное покрытие ЗМ.ПАНЦИРЬ.АК на промышленном узле"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.7) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-orange-500" />
                  <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                </div>
              </div>

              {/* Меньшее */}
              <div className="sm:col-span-8 sm:col-start-3 relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/10 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.8)] bg-[#0c0c0e]">
                  <img
                    src={IMG_SECOND}
                    alt="Применение покрытия в судовом техническом помещении"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.7) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
