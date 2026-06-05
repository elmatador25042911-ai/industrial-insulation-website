import Icon from "@/components/ui/icon";

const CARDS = [
  {
    icon: "CloudRain",
    title: "Осадки",
    text: "Не выполнять работы при дожде, снеге и других осадках.",
  },
  {
    icon: "Droplets",
    title: "Высокая влажность",
    text: "Не наносить покрытие при относительной влажности воздуха выше 90%.",
  },
  {
    icon: "Wind",
    title: "Сильный ветер",
    text: "Не проводить нанесение при сильном ветре, особенно при работе распылителем.",
  },
  {
    icon: "ThermometerSnowflake",
    title: "Температура ниже +5 °C",
    text: "Не выполнять работы при риске снижения температуры окружающей среды ниже +5 °C в течение суток.",
  },
  {
    icon: "Ban",
    title: "Неподготовленная поверхность",
    text: "Не наносить материал на влажную, загрязнённую, ржавую или непрочную поверхность.",
  },
];

const LimitationsSection = () => {
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
              УСЛОВИЯ РАБОТ
            </span>
          </div>
          <h2 className="ak-h2 text-white">
            Ограничения при <span className="text-orange-500">нанесении</span>
          </h2>
          <p className="ak-text text-gray-400">
            При нанесении ЗМ.ПАНЦИРЬ.АК важно учитывать состояние поверхности и
            условия окружающей среды. Нарушение условий нанесения может повлиять
            на адгезию, высыхание и формирование защитного слоя.
          </p>
        </div>

        {/* Карточки ограничений */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ak-grid">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="ak-card group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 transition-colors duration-300 hover:border-orange-500/40"
              style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
            >
              <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
              <div className="flex items-center gap-3 mb-3">
                <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} size={20} className="text-orange-400" />
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
                  {c.title}
                </h3>
              </div>
              <p className="ak-card-text text-gray-400">{c.text}</p>
            </article>
          ))}
        </div>

        {/* Техническая подпись */}
        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-5 py-4">
          <Icon
            name="Info"
            size={18}
            className="text-orange-400 mt-0.5 flex-shrink-0"
          />
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[1.7]">
            Перед нанесением поверхность должна быть сухой, очищенной,
            обезжиренной и подготовленной под тип основания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;