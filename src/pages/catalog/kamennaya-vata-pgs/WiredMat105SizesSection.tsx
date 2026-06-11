import Icon from "@/components/ui/icon";

type Panel = {
  title: string;
  icon: string;
  unit: string;
  values: string[];
  grid: string;
  span: string;
};

const PANELS: Panel[] = [
  {
    title: "Толщина",
    icon: "Ruler",
    unit: "мм",
    values: ["25", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120"],
    grid: "grid-cols-3 sm:grid-cols-4",
    span: "md:col-span-6",
  },
  {
    title: "Длина",
    icon: "MoveHorizontal",
    unit: "мм",
    values: ["2000", "4000", "5000", "6000", "7000"],
    grid: "grid-cols-3 sm:grid-cols-3",
    span: "md:col-span-3",
  },
  {
    title: "Ширина",
    icon: "MoveVertical",
    unit: "мм",
    values: ["1000"],
    grid: "grid-cols-1",
    span: "md:col-span-3",
  },
];

const COMBOS: { th: string; len: string }[] = [
  { th: "25 мм", len: "7000 мм" },
  { th: "30 мм", len: "6000 мм" },
  { th: "40 мм", len: "5000 мм" },
  { th: "50 мм", len: "4000 мм" },
  { th: "60 мм", len: "2000 мм" },
  { th: "70 мм", len: "2000 мм" },
  { th: "80 мм", len: "2000 мм" },
  { th: "90 мм", len: "2000 мм" },
  { th: "100 мм", len: "2000 мм" },
  { th: "110 мм", len: "2000 мм" },
  { th: "120 мм", len: "2000 мм" },
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

    <div className="mt-5 flex items-center justify-between text-[11px] tracking-[0.18em] text-gray-500 uppercase">
      <span>Всего значений</span>
      <span className="text-orange-400 font-semibold">{p.values.length}</span>
    </div>
  </div>
);

export const WiredMat105SizesSection = () => {
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
            <span className="cat-label text-orange-400/90">РАЗМЕРЫ ПРОШИВНЫХ МАТОВ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Размеры <span className="text-orange-500">ВАЙРЕД МАТ 105</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            ВАЙРЕД МАТ 105 выпускается в рулонах шириной 1000 мм. Длина рулона зависит от толщины
            материала.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {PANELS.map((p, i) => (
            <SizePanel key={p.title} p={p} index={i} />
          ))}
        </div>

        {/* Сочетания толщины и длины */}
        <div className="mt-6 rounded-sm border border-white/10 bg-white/[0.02] p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-5">
            <Icon name="Rows3" size={16} className="text-orange-400" />
            <span className="text-[11px] tracking-[0.2em] text-gray-400 uppercase font-semibold">
              Сочетания толщины и длины
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {COMBOS.map((c) => (
              <li
                key={c.th}
                className="flex items-center justify-between gap-4 rounded-sm bg-white/[0.03] border border-white/5 px-4 py-2.5"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-white font-mono text-[14px] tracking-wide">{c.th}</span>
                </span>
                <span className="flex items-center gap-2 text-gray-400 text-[12.5px]">
                  <span className="uppercase tracking-[0.14em] text-[10px] text-gray-500">
                    длина
                  </span>
                  <span className="text-orange-300 font-mono text-[14px]">{c.len}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13px] leading-[1.6]">
            Размеры относятся к ВАЙРЕД МАТ 105 и его исполнениям. Доступность конкретного покрытия и
            типоразмера необходимо подтверждать при подборе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WiredMat105SizesSection;
