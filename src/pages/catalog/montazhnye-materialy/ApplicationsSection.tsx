import Icon from "@/components/ui/icon";

type Application = {
  title: string;
  icon: string;
  text: string;
};

const APPLICATIONS: Application[] = [
  {
    title: "Стыки трубной изоляции",
    icon: "Pipette",
    text: "Склеивание продольных и поперечных стыков трубной изоляции при монтаже на судовых трубопроводах.",
  },
  {
    title: "Рулонная изоляция",
    icon: "Layers",
    text: "Монтаж рулонных материалов на воздуховодах, вентиляционных каналах, резервуарах и инженерных поверхностях.",
  },
  {
    title: "Швы и примыкания",
    icon: "GitMerge",
    text: "Обработка швов, торцевых участков и примыканий теплоизоляции с применением стыковочных лент.",
  },
  {
    title: "Подготовка поверхностей",
    icon: "SprayCan",
    text: "Очистка и обезжиривание поверхностей перед нанесением клея и установкой изоляционных материалов.",
  },
  {
    title: "Судовые инженерные системы",
    icon: "Wind",
    text: "Применение при монтаже теплоизоляции систем вентиляции, кондиционирования, отопления и технологических коммуникаций.",
  },
  {
    title: "Верфи, доки, судоремонт",
    icon: "Anchor",
    text: "Использование при строительстве, ремонте, переоборудовании и обслуживании судов.",
  },
];

const ApplicationCard = ({ app, index }: { app: Application; index: number }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 p-6 sm:p-7 flex flex-col"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    {/* Угловые акценты */}
    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-orange-500" />

    {/* Индекс */}
    <div
      className="absolute top-4 right-4 text-[11px] tracking-[0.2em] text-gray-500"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>

    <div className="flex items-center gap-3 mb-4 mt-2">
      <span className="w-10 h-10 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={app.icon} size={18} className="text-orange-400" />
      </span>
    </div>

    <h3
      className="text-white text-[18px] sm:text-[19px] leading-tight mb-3"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.01em",
        textTransform: "uppercase",
      }}
    >
      {app.title}
    </h3>

    <p className="text-gray-400 text-[14px] leading-[1.7]">{app.text}</p>

    {/* Тонкая оранжевая линия снизу */}
    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
  </article>
);

export const ApplicationsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[160px]" />
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
        {/* Шапка */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ПРИМЕНЕНИЕ</span>
          </div>
          <h2 className="t-h2 text-white">
            Применение монтажных материалов{" "}
            <span className="text-orange-500">в судостроении</span>
          </h2>
        </div>

        {/* Сетка 3×2 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {APPLICATIONS.map((app, i) => (
            <ApplicationCard key={app.title} app={app} index={i} />
          ))}
        </div>

        {/* Техническая подпись */}
        <div className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Состав монтажных материалов подбирают по типу изоляции, наружному покрытию,
            условиям эксплуатации и требованиям к обработке стыков.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;