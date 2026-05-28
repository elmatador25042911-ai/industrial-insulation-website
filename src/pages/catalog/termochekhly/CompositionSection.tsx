import Icon from "@/components/ui/icon";

type Layer = {
  num: string;
  icon: string;
  title: string;
  short: string;
  text: string;
};

const LAYERS: Layer[] = [
  {
    num: "01",
    icon: "Shield",
    title: "Наружный защитный слой",
    short: "Защита от внешних воздействий",
    text: "Варианты наружного слоя подбираются по условиям эксплуатации: стеклоткань с силиконовой пропиткой, алюминизированное покрытие, армированное покрытие или кремнезёмная ткань.",
  },
  {
    num: "02",
    icon: "Layers",
    title: "Теплоизоляционный слой",
    short: "Внутреннее наполнение",
    text: "Внутреннее наполнение подбирается по температурному режиму и задаче изоляции: вспененный каучук или полиэтилен, каменная вата, аэрогель, кремнезёмная вата.",
  },
  {
    num: "03",
    icon: "Link2",
    title: "Крепления и фиксация",
    short: "Съёмное соединение",
    text: "Для фиксации применяются липучки ВЕЛКРО, D-образные полукольца, пружинные замки, люверсы, крючки и ремни.",
  },
  {
    num: "04",
    icon: "Ruler",
    title: "Индивидуальная форма",
    short: "Под конкретный узел",
    text: "Изделие изготавливается под конкретный узел: арматуру, фланец, клапан, корпус оборудования или сложный участок трубопровода.",
  },
];

const LayerCard = ({ layer }: { layer: Layer }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-colors duration-300 hover:border-orange-500/40 flex flex-col"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    <div className="flex items-center gap-3 mb-5">
      <span
        className="text-[13px] tracking-[0.28em] text-orange-500/80 font-semibold"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {layer.num}
      </span>
      <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
        <Icon name={layer.icon} size={20} className="text-orange-400" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
    </div>

    <h3
      className="text-white text-[19px] sm:text-[21px] leading-[1.15] mb-2"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.01em",
        textTransform: "uppercase",
      }}
    >
      {layer.title}
    </h3>

    <div
      className="text-[11px] tracking-[0.22em] text-orange-400/80 uppercase mb-4"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {layer.short}
    </div>

    <p className="text-gray-400 text-[14px] leading-[1.7]">{layer.text}</p>
  </article>
);

const Diagram = () => (
  <div className="relative">
    <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/12 via-transparent to-orange-600/8 blur-[60px]" />
    <div
      className="relative overflow-hidden rounded-sm border border-white/10 backdrop-blur-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] p-8 sm:p-10"
      style={{
        background:
          "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.08) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
      }}
    >
      {/* Тонкая сетка */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Угловые акценты */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />

      {/* Шильдик */}
      <div
        className="absolute top-3 right-3 text-[11px] tracking-[0.2em] text-gray-300 px-2 py-1 rounded-sm border border-white/10 bg-black/40 backdrop-blur-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        КОНСТРУКЦИЯ
      </div>

      {/* Схема слоёв */}
      <div className="relative mt-10">
        <div className="space-y-3">
          {[
            { num: "01", label: "НАРУЖНЫЙ ЗАЩИТНЫЙ СЛОЙ", h: "h-6" },
            { num: "02", label: "ТЕПЛОИЗОЛЯЦИОННЫЙ СЛОЙ", h: "h-12" },
            { num: "03", label: "КРЕПЛЕНИЯ / ФИКСАЦИЯ", h: "h-5" },
            { num: "04", label: "УЗЕЛ ОБОРУДОВАНИЯ", h: "h-7" },
          ].map((row, i) => (
            <div key={row.num} className="flex items-center gap-3 sm:gap-4">
              <span
                className="text-[11px] sm:text-[12px] tracking-[0.22em] text-orange-500/80 font-semibold w-7 flex-shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {row.num}
              </span>
              <div
                className={`relative flex-1 ${row.h} rounded-sm border border-white/10 overflow-hidden`}
                style={{
                  background:
                    i === 3
                      ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 8px, rgba(255,255,255,0.02) 8px 16px)"
                      : i === 2
                      ? "linear-gradient(90deg, rgba(230,48,18,0.18), rgba(249,115,22,0.10))"
                      : i === 1
                      ? "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))"
                      : "linear-gradient(90deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                }}
              >
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-[11px] tracking-[0.18em] text-gray-300 uppercase">
                  {row.label}
                </span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 h-px w-6 bg-orange-500/60" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2">
          <span className="h-px w-6 bg-orange-500/60" />
          <span
            className="text-[10px] sm:text-[11px] tracking-[0.22em] text-gray-500 uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Схема конструкции / условный разрез
          </span>
        </div>
      </div>

      {/* Виньетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(10,10,12,0.45) 92%, rgba(10,10,12,0.85) 100%)",
        }}
      />
      <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
    </div>
  </div>
);

export const CompositionSection = () => {
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">
              КОНСТРУКЦИЯ
            </span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Состав <span className="text-orange-500">термочехла</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Конструкция термочехла подбирается под форму узла, температурный режим,
            условия эксплуатации и требования к демонтажу при обслуживании
            оборудования.
          </p>
        </div>

        {/* Сетка: слева 4 карточки 2x2, справа схема */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {LAYERS.map((l) => (
              <LayerCard key={l.num} layer={l} />
            ))}
          </div>
          <div className="lg:col-span-5">
            <Diagram />
          </div>
        </div>

        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Окончательный состав термочехла определяется по параметрам объекта,
            температуре поверхности, условиям эксплуатации, требованиям к
            съёмности и доступу для обслуживания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompositionSection;
