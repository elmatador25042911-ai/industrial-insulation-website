import Icon from "@/components/ui/icon";

type Spec = {
  icon: string;
  label: string;
  value: string;
};

const SPECS: Spec[] = [
  {
    icon: "ShieldHalf",
    label: "Продукт",
    value: "ИТШМИ ПАНЦИРЬ",
  },
  {
    icon: "FileBadge",
    label: "Технические условия",
    value: "ТУ 23.99.19-001-85495285-2018",
  },
  {
    icon: "Thermometer",
    label: "Температурный диапазон",
    value: "от -200 до +1200 °C",
  },
  {
    icon: "PackageOpen",
    label: "Исполнение",
    value: "Съёмное, под размеры узла",
  },
  {
    icon: "Hourglass",
    label: "Срок службы",
    value: "до 25 лет",
  },
  {
    icon: "ShieldCheck",
    label: "Гарантия",
    value: "2 года",
  },
  {
    icon: "Calculator",
    label: "Подготовка расчёта",
    value: "1–2 рабочих дня",
  },
  {
    icon: "Factory",
    label: "Изготовление",
    value: "ориентировочно от 4 рабочих дней",
  },
];

const SpecCard = ({ s, index }: { s: Spec; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-colors duration-300 hover:border-orange-500/40"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    <div className="flex items-center gap-3 mb-5">
      <span
        className="text-[12px] tracking-[0.22em] text-orange-500/80 font-semibold"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
        <Icon name={s.icon} size={20} className="text-orange-400" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
    </div>

    <div
      className="text-[11px] tracking-[0.22em] text-gray-500 uppercase mb-2"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {s.label}
    </div>

    <div
      className="text-white text-[18px] sm:text-[20px] leading-[1.25]"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.01em",
      }}
    >
      {s.value}
    </div>
  </article>
);

export const SpecsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">
              ХАРАКТЕРИСТИКИ
            </span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Основные характеристики{" "}
            <span className="text-orange-500">ИТШМИ ПАНЦИРЬ</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Параметры термочехла уточняются под конкретный узел, температурный
            режим, условия эксплуатации и требования к обслуживанию оборудования.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SPECS.map((s, i) => (
            <SpecCard key={s.label} s={s} index={i} />
          ))}
        </div>

        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Сроки и параметры изготовления зависят от сложности узла, количества
            изделий, полноты исходных данных и требований к конструкции термочехла.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
