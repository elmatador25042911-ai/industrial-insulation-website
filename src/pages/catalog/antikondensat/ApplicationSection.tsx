import Icon from "@/components/ui/icon";

const IMG =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/antikondensat/akvaros_antikondensat_application_01.png";

const STEPS = [
  {
    num: "01",
    icon: "Sparkles",
    title: "Подготовка основания",
    text: "Поверхность должна быть сухой, обезжиренной и очищенной от загрязнений, рыхлых участков, ржавчины и непрочных покрытий.",
  },
  {
    num: "02",
    icon: "Layers",
    title: "Грунтование при необходимости",
    text: "Для повышения адгезии может применяться грунтовка, подобранная под тип основания или металла.",
  },
  {
    num: "03",
    icon: "Blend",
    title: "Перемешивание материала",
    text: "Перед нанесением покрытие перемешивается до однородного состояния. Допускается разбавление водой 3–7%.",
  },
  {
    num: "04",
    icon: "Brush",
    title: "Нанесение покрытия",
    text: "Материал наносится кистью, воздушным или безвоздушным распылителем. Покрытие формируется послойно.",
  },
  {
    num: "05",
    icon: "Gauge",
    title: "Контроль слоя и высыхание",
    text: "Толщина одного слоя — не более 0,4–0,5 мм. Полное формирование защитных свойств происходит после высыхания покрытия.",
  },
];

const ApplicationSection = () => {
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
        <div className="ak-head">
          <div className="ak-label-row">
            <span className="h-px w-10 bg-orange-500" />
            <span className="ak-label text-orange-400/90">
              ТЕХНОЛОГИЯ НАНЕСЕНИЯ
            </span>
          </div>
          <h2 className="ak-h2 text-white">
            Подготовка поверхности и{" "}
            <span className="text-orange-500">нанесение</span>
          </h2>
          <p className="ak-lead text-gray-300">
            Качество антиконденсатного покрытия зависит от подготовки основания и
            соблюдения технологии нанесения. Перед работой поверхность очищается,
            материал перемешивается до однородного состояния и наносится
            послойно с контролем толщины.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Этапы — timeline */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="relative">
              {/* Вертикальная линия */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/50 via-white/10 to-transparent" />

              <div className="space-y-5">
                {STEPS.map((s) => (
                  <article
                    key={s.num}
                    className="group relative pl-14"
                  >
                    {/* Точка / иконка */}
                    <span className="absolute left-0 top-1 w-10 h-10 rounded-sm border border-orange-500/40 bg-[#0c0c0e] flex items-center justify-center z-10">
                      <Icon name={s.icon} size={18} className="text-orange-400" />
                    </span>

                    <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-5 transition-colors duration-300 hover:border-orange-500/40">
                      <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-[13px] tracking-[0.24em] text-orange-500/80 font-semibold"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          ЭТАП {s.num}
                        </span>
                        <h3
                          className="text-white text-[16px] sm:text-[17px] leading-[1.2]"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.01em",
                            textTransform: "uppercase",
                          }}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <p className="ak-card-text text-gray-400">
                        {s.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Изображение */}
          <div className="lg:col-span-5 order-1 lg:order-1 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] bg-[#0c0c0e]">
                <img
                  src={IMG}
                  alt="Нанесение антиконденсатного покрытия ЗМ.ПАНЦИРЬ.АК"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;