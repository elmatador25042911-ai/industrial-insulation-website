import Icon from "@/components/ui/icon";

const POINTS = [
  {
    icon: "Snowflake",
    title: "Без «мостиков холода»",
    text: "Опорно-подвесные системы исключают прямой контакт трубопровода с металлоконструкциями и предотвращают образование «мостиков холода».",
  },
  {
    icon: "Layers",
    title: "Разгрузка теплоизоляции",
    text: "Берут на себя вес трубопровода и снимают нагрузку с теплоизоляционного слоя, сохраняя его целостность.",
  },
  {
    icon: "Wrench",
    title: "Надёжное крепление",
    text: "Обеспечивают устойчивую фиксацию трубопроводов и инженерных коммуникаций в проектном положении.",
  },
];

export const PurposeSection = () => (
  <section className="relative overflow-hidden border-t border-white/5">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">О ПРОДУКТЕ</span>
        </div>
        <h2 className="cat-h2 text-white mb-6">
          Зачем нужны <span className="text-orange-500">опоры и подвесы</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
          Опорно-подвесные системы — это элементы крепления трубопроводов и
          инженерных коммуникаций. Они удерживают трубопровод в проектном
          положении, предотвращают образование «мостиков холода», разгружают
          теплоизоляцию и обеспечивают надёжную фиксацию систем.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {POINTS.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-colors duration-300 hover:border-orange-500/40"
            style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
          >
            <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center mb-5">
              <Icon name={p.icon} size={20} className="text-orange-400" />
            </span>
            <h3
              className="text-white text-[18px] mb-3 leading-[1.2]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              {p.title}
            </h3>
            <p className="text-gray-400 text-[14px] leading-[1.65]">{p.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PurposeSection;