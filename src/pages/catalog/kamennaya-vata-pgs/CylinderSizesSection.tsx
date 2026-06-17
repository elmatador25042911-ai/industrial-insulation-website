import Icon from "@/components/ui/icon";

type Panel = {
  title: string;
  icon: string;
  unit: string;
  values: string[];
  rangeText?: string;
  grid: string;
  span: string;
  showCount: boolean;
};

type Group = { name: string; desc: string; panels: Panel[]; note: string };

const GROUPS: Group[] = [
  {
    name: "Навивные цилиндры ROCKWOOL / РОКВУЛ 100 / 150",
    desc: "Навивные цилиндры выпускаются длиной 1 м. Общая линейка включает широкий набор внутренних диаметров и толщин теплоизоляции. Доступность конкретного сочетания зависит от марки цилиндра.",
    panels: [
      {
        title: "Толщина изоляции",
        icon: "Ruler",
        unit: "мм",
        values: ["25", "30", "40", "50", "60", "70", "80", "90", "100"],
        grid: "grid-cols-3 sm:grid-cols-3",
        span: "md:col-span-3",
        showCount: true,
      },
      {
        title: "Внутренний диаметр",
        icon: "Circle",
        unit: "мм",
        values: [
          "18", "21", "25", "28", "32", "35", "38", "42", "45", "48",
          "54", "57", "60", "64", "70", "76", "83", "89", "102", "108",
          "114", "133", "140", "159", "169", "194", "205", "219", "245", "273",
        ],
        grid: "grid-cols-4 sm:grid-cols-6",
        span: "md:col-span-6",
        showCount: true,
      },
      {
        title: "Длина",
        icon: "MoveHorizontal",
        unit: "мм",
        values: ["1000"],
        grid: "grid-cols-1",
        span: "md:col-span-3",
        showCount: true,
      },
    ],
    note: "Для ROCKWOOL / РОКВУЛ 100 и ROCKWOOL / РОКВУЛ 150 доступность отдельных сочетаний внутреннего диаметра и толщины различается. Точный типоразмер необходимо подтверждать при подборе материала.",
  },
  {
    name: "Вырезные цилиндры XOTPIPE / ХОТПАЙП SP 100",
    desc: "Вырезные цилиндры XOTPIPE / ХОТПАЙП выпускаются в расширенном диапазоне размеров. Конкретное исполнение подбирается по диаметру трубопровода, толщине теплоизоляции, типу покрытия и условиям монтажа.",
    panels: [
      {
        title: "Диаметр трубопровода",
        icon: "Circle",
        unit: "мм",
        values: [],
        rangeText: "от 6 до 1420",
        grid: "grid-cols-1",
        span: "md:col-span-4",
        showCount: false,
      },
      {
        title: "Толщина изоляции",
        icon: "Ruler",
        unit: "мм",
        values: [],
        rangeText: "от 20 до 150",
        grid: "grid-cols-1",
        span: "md:col-span-4",
        showCount: false,
      },
      {
        title: "Длина",
        icon: "MoveHorizontal",
        unit: "мм",
        values: ["1000", "1200"],
        grid: "grid-cols-2",
        span: "md:col-span-4",
        showCount: true,
      },
    ],
    note: "Точные серийные типоразмеры и доступные сочетания диаметра, толщины и длины зависят от исполнения цилиндра: без покрытия, с алюминиевой фольгой, наружным защитным покрытием или металлической окожушкой.",
  },
];

const SizePanel = ({ p, index }: { p: Panel; index: number }) => (
  <div
    className={`group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-all duration-300 hover:border-orange-500/50 flex flex-col ${p.span}`}
  >
    <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center flex-shrink-0">
          <Icon name={p.icon} size={18} className="text-orange-400" />
        </div>
        <div>
          <div className="text-[10px] tracking-[0.22em] text-orange-500/70 font-semibold">
            0{index + 1}
          </div>
          <div className="text-white text-base sm:text-lg font-semibold leading-tight">
            {p.title}
          </div>
        </div>
      </div>
      <span className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">{p.unit}</span>
    </div>

    {p.rangeText ? (
      <div className="flex-1 flex items-center">
        <div className="w-full text-center py-6 rounded-sm bg-white/[0.03] border border-white/5">
          <span className="text-white font-mono text-2xl sm:text-3xl tracking-tight">
            {p.rangeText}
          </span>
        </div>
      </div>
    ) : (
      <div className={`grid ${p.grid} gap-2`}>
        {p.values.map((v) => (
          <div
            key={v}
            className="text-center py-2.5 rounded-sm bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.05] transition-colors"
          >
            <span className="text-white font-mono text-[14px] sm:text-[15px] tracking-wide">
              {v}
            </span>
          </div>
        ))}
      </div>
    )}

    {p.showCount && (
      <div className="mt-5 flex items-center justify-between text-[11px] tracking-[0.18em] text-gray-500 uppercase">
        <span>Всего значений</span>
        <span className="text-orange-400 font-semibold">{p.values.length}</span>
      </div>
    )}
  </div>
);

const GroupBlock = ({ group }: { group: Group }) => (
  <div className="mt-12">
    <div className="flex items-center gap-3 mb-3">
      <span className="w-1.5 h-6 bg-orange-500 rounded-sm flex-shrink-0" />
      <h3
        className="text-white text-[18px] sm:text-[20px]"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        }}
      >
        {group.name}
      </h3>
    </div>
    <p className="text-gray-400 text-[14px] leading-relaxed max-w-3xl mb-6">{group.desc}</p>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
      {group.panels.map((p, i) => (
        <SizePanel key={p.title} p={p} index={i} />
      ))}
    </div>

    <div className="mt-5 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
      <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
      <p className="text-gray-400 text-[13px] leading-[1.6]">{group.note}</p>
    </div>
  </div>
);

export const CylinderSizesSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/[0.04] blur-[160px]" />
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
            <span className="cat-label text-orange-400/90">РАЗМЕРЫ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Размеры цилиндров{" "}
            <span className="text-orange-500">из каменной ваты</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Размер цилиндра подбирается по наружному диаметру трубопровода, необходимой толщине
            теплоизоляции, температурному режиму и условиям эксплуатации. Точное сочетание диаметра
            и толщины зависит от выбранного производителя и исполнения.
          </p>
        </div>

        {GROUPS.map((g) => (
          <GroupBlock key={g.name} group={g} />
        ))}

        {/* Общее примечание */}
        <div className="mt-10 flex items-start gap-3 rounded-sm border border-orange-500/20 bg-orange-500/[0.04] p-4">
          <Icon name="Ruler" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-300 text-[13.5px] leading-[1.6]">
            Размеры цилиндров обозначаются как внутренний диаметр × толщина изоляции × длина.
            Окончательный типоразмер подбирается по фактическому наружному диаметру трубопровода и
            расчётной толщине теплоизоляции.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CylinderSizesSection;