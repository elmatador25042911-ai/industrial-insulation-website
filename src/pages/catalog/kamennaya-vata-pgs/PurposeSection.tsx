import Icon from "@/components/ui/icon";

type Card = { title: string; icon: string; text: string };

const CARDS: Card[] = [
  {
    title: "Снижение теплопотерь",
    icon: "ThermometerSnowflake",
    text: "Ограничивает потери тепла на трубопроводах, оборудовании и инженерных коммуникациях.",
  },
  {
    title: "Высокие температуры",
    icon: "Flame",
    text: "Подходит для теплоизоляционных конструкций, работающих при повышенных температурах. Допустимый предел зависит от типа материала и исполнения.",
  },
  {
    title: "Пожарная безопасность",
    icon: "ShieldCheck",
    text: "Доступны негорючие исполнения для промышленных объектов, трубопроводов и систем вентиляции.",
  },
  {
    title: "Разные формы поверхностей",
    icon: "Layers",
    text: "Цилиндры применяются на прямых трубопроводах, а маты — на оборудовании, воздуховодах, газоходах и участках сложной формы.",
  },
];

const PurposeCard = ({ c, index }: { c: Card; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 p-6 flex flex-col h-full"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
    <div
      className="absolute top-4 right-4 text-[11px] tracking-[0.2em] text-gray-500"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>

    <span className="w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0 mb-4 mt-1">
      <Icon name={c.icon} size={20} className="text-orange-400" />
    </span>

    <h3
      className="text-white text-[16px] leading-tight mb-3"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.01em",
        textTransform: "uppercase",
      }}
    >
      {c.title}
    </h3>

    <p className="text-gray-400 text-[13.5px] leading-[1.65]">{c.text}</p>

    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
  </article>
);

export const PurposeSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[160px]" />
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
            <span className="cat-label text-orange-400/90">МАТЕРИАЛ / НАЗНАЧЕНИЕ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Назначение и основные свойства{" "}
            <span className="text-orange-500">каменной ваты</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Каменная вата применяется для теплоизоляции промышленных и технологических
            трубопроводов, оборудования, инженерных систем зданий, вентиляционных каналов и
            поверхностей сложной формы.
          </p>
          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-4">
            Материал выпускается в форме цилиндров и матов различной конструкции. Конкретное
            исполнение подбирается по форме поверхности, температурному режиму, требованиям к
            пожарной безопасности, механической прочности и условиям монтажа.
          </p>
        </div>

        {/* 4 карточки в ряд */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CARDS.map((c, i) => (
            <PurposeCard key={c.title} c={c} index={i} />
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13.5px] leading-[1.6]">
            Температурный диапазон, плотность, теплопроводность, размеры и тип покрытия зависят от
            выбранного вида материала и производителя.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
