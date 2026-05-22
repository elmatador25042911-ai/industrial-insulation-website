import Icon from "@/components/ui/icon";

const CARDS: { icon: string; title: string; text: string }[] = [
  {
    icon: "Layers",
    title: "Рулонный материал для инженерных поверхностей",
    text: "Рулонная изоляция применяется для теплоизоляции воздуховодов, вентиляционных каналов, резервуаров, трубопроводов и других судовых инженерных поверхностей.",
  },
  {
    icon: "Droplets",
    title: "Контроль конденсата и теплопотерь",
    text: "Закрытая ячеистая структура материала снижает теплопотери и помогает ограничивать образование конденсата на изолируемых поверхностях.",
  },
  {
    icon: "Settings2",
    title: "Исполнения под условия эксплуатации",
    text: "Материал может применяться в стандартном исполнении, с самоклеящимся слоем и защитными покрытиями для различных условий монтажа и эксплуатации.",
  },
];

export const DescriptionSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="t-label text-orange-400/90 tracking-[0.18em]">ОПИСАНИЕ МАТЕРИАЛА</span>
        </div>
        <h2 className="t-h2 text-white mb-12 max-w-3xl">
          Краткое <span className="text-orange-500">описание</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#101012] p-7 transition-all duration-300 hover:border-orange-500/40"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange-500/[0.08] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 mb-5">
                <span className="text-[11px] tracking-[0.2em] text-orange-500/80 font-semibold">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <Icon name={c.icon} size={20} className="text-orange-400" />
              </div>
              <h3 className="relative text-white text-lg font-semibold mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="relative text-gray-400 text-[14px] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
