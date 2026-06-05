import Icon from "@/components/ui/icon";

const IMG =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/antikondensat/akvaros_antikondensat_industrial_node_01.png";

const CARDS = [
  {
    icon: "ShieldCheck",
    title: "Антиконденсатная защита",
    text: "Снижает риск образования конденсата на поверхности трубопроводов, оборудования и конструкций.",
  },
  {
    icon: "Pipette",
    title: "Трубопроводы и арматура",
    text: "Подходит для участков трубопроводных линий, фланцевых соединений и узлов сложной геометрии.",
  },
  {
    icon: "Container",
    title: "Оборудование и корпуса",
    text: "Применяется на металлических поверхностях, корпусах оборудования, ёмкостях и резервуарах.",
  },
  {
    icon: "Ship",
    title: "Судовые технические помещения",
    text: "Может применяться в машинных отделениях, технических зонах и инженерных системах судов.",
  },
];

const PurposeSection = () => {
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">
              МАТЕРИАЛ / ПРИМЕНЕНИЕ
            </span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Назначение, принцип действия и{" "}
            <span className="text-orange-500">области применения</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-[1.7] mb-4">
            ЗМ.ПАНЦИРЬ.АК — готовое к применению защитное антиконденсатное
            покрытие. Материал наносится на поверхность оборудования,
            трубопроводов и металлических конструкций, формируя защитный слой для
            снижения риска образования конденсата.
          </p>
          <p className="text-gray-400 text-[15px] sm:text-base leading-[1.7]">
            Покрытие применяется на объектах с повышенным риском выпадения влаги:
            в судовых технических помещениях, на трубопроводных линиях, элементах
            оборудования, корпусах, ёмкостях и узлах сложной формы.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Карточки */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CARDS.map((c) => (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 transition-colors duration-300 hover:border-orange-500/40"
                style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
              >
                <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={20} className="text-orange-400" />
                </span>
                <h3
                  className="text-white text-[17px] sm:text-[18px] leading-[1.2] mb-2"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-gray-400 text-[14px] leading-[1.7]">
                  {c.text}
                </p>
              </article>
            ))}
          </div>

          {/* Визуальный блок */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] bg-[#0c0c0e]"
              >
                <img
                  src={IMG}
                  alt="Антиконденсатное покрытие ЗМ.ПАНЦИРЬ.АК на промышленном узле"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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

export default PurposeSection;
