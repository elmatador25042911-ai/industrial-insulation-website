import Icon from "@/components/ui/icon";

type Size = {
  title: string;
  unit: string;
  values: string[];
  icon: string;
  span: string;
  grid: string;
};

const SIZES: Size[] = [
  {
    title: "Толщина",
    unit: "мм",
    values: ["03", "06", "09", "10", "13", "16", "19", "25", "32", "40", "50"],
    icon: "Ruler",
    span: "lg:col-span-5",
    grid: "grid-cols-3 sm:grid-cols-4",
  },
  {
    title: "Длина",
    unit: "м",
    values: ["3", "4", "6", "7", "8", "10", "15", "30", "40", "60"],
    icon: "MoveHorizontal",
    span: "lg:col-span-5",
    grid: "grid-cols-3 sm:grid-cols-5",
  },
  {
    title: "Ширина",
    unit: "мм",
    values: ["1000"],
    icon: "MoveVertical",
    span: "lg:col-span-2",
    grid: "grid-cols-1",
  },
];

export const SizesSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="cat-label text-orange-400/90">РАЗМЕРЫ</span>
        </div>
        <h2 className="cat-h2 text-white mb-12 max-w-3xl">
          Размеры <span className="text-orange-500">изоляционных рулонов</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {SIZES.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-all duration-300 hover:border-orange-500/50 ${s.span}`}
            >
              <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                    <Icon name={s.icon} size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.22em] text-orange-500/70 font-semibold">
                      0{i + 1}
                    </div>
                    <div className="text-white text-base sm:text-lg font-semibold leading-tight">
                      {s.title}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">
                  {s.unit}
                </span>
              </div>

              <div className={`grid ${s.grid} gap-2`}>
                {s.values.map((v) => (
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
                <span className="text-orange-400 font-semibold">{s.values.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SizesSection;
