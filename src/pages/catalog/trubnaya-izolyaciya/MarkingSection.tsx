import Icon from "@/components/ui/icon";
import { tubeImages } from "@/assets/trubnaya-izolyaciya/assets";

const MARKING_PARTS: { code: string; label: string; accent?: boolean }[] = [
  { code: "UNIONFLEX", label: "Бренд производителя" },
  { code: "STD", label: "Марка продукции" },
  { code: "09", label: "Толщина стенки, мм" },
  { code: "042", label: "Внутренний диаметр, мм" },
  { code: "1", label: "Длина, м" },
  { code: "METALL", label: "Вид покрытия" },
];

const SIZES: { title: string; unit: string; values: string[]; icon: string; columns: number }[] = [
  {
    title: "Толщина стенки",
    unit: "мм",
    values: ["06", "09", "13", "19", "25", "32"],
    icon: "Ruler",
    columns: 3,
  },
  {
    title: "Внутренний диаметр",
    unit: "мм",
    values: [
      "006", "008", "010", "012", "015",
      "018", "020", "022", "025", "028",
      "030", "035", "042", "048", "054",
      "057", "060", "064", "070", "076",
      "080", "089", "102", "108", "114",
      "125", "133", "140", "160",
    ],
    icon: "Circle",
    columns: 5,
  },
  {
    title: "Длина",
    unit: "м",
    values: ["1", "2"],
    icon: "MoveHorizontal",
    columns: 2,
  },
];

export const MarkingSection = () => {
  return (
    <>
      {/* ── Как читать маркировку ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">МАРКИРОВКА</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Как читать <span className="text-orange-500">маркировку</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Слева — пример и расшифровка */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-9">
              <div className="absolute top-0 left-0 h-[2px] w-16 bg-orange-500" />

              <div className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold mb-4">
                ПРИМЕР МАРКИРОВКИ
              </div>

              {/* Сама маркировка */}
              <div className="relative overflow-x-auto pb-2 mb-8">
                <div className="flex items-end flex-wrap gap-1.5 sm:gap-2 font-mono">
                  <span className="text-gray-500 text-lg sm:text-xl pr-1">Трубка</span>
                  <span className="text-white text-xl sm:text-3xl font-bold">UNIONFLEX</span>
                  <span className="text-white text-xl sm:text-3xl font-bold">STD</span>
                  <span className="text-orange-400 text-xl sm:text-3xl font-bold">09</span>
                  <span className="text-gray-500 text-xl sm:text-3xl">×</span>
                  <span className="text-orange-400 text-xl sm:text-3xl font-bold">042</span>
                  <span className="text-gray-500 text-xl sm:text-3xl">-</span>
                  <span className="text-orange-400 text-xl sm:text-3xl font-bold">1</span>
                  <span className="text-white text-xl sm:text-3xl font-bold pl-2">METALL</span>
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent" />
              </div>

              {/* Расшифровка */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MARKING_PARTS.map((p, i) => (
                  <div
                    key={p.code}
                    className="flex items-center gap-4 p-3 rounded-sm bg-white/[0.025] border border-white/5 hover:border-orange-500/40 transition-colors"
                  >
                    <div className="flex-shrink-0 min-w-[64px] h-10 px-3 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                      <span className="text-orange-400 font-mono font-bold text-sm tracking-wide whitespace-nowrap">
                        {p.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[10px] tracking-[0.2em] text-gray-500 font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-gray-200 text-[14px] leading-snug">{p.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Справа — фото трубки */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[320px]">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/15 via-transparent to-transparent blur-2xl" />
                <div
                  className="relative h-full overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 30% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 50%, rgba(10,10,12,0.95) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />
                  <img
                    src={tubeImages.stdAngle01}
                    alt="Пример трубной изоляции"
                    className="absolute inset-0 w-full h-full object-contain p-8"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 90%, rgba(10,10,12,0.9) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                  <div className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

                  {/* Бейдж */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-sm border border-orange-500/40 bg-[#0a0a0a]/70 backdrop-blur-sm">
                    <Icon name="Tag" size={12} className="text-orange-400" />
                    <span className="text-[10px] tracking-[0.2em] text-orange-300 font-semibold">
                      МАРКИРОВКА
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Размеры ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">РАЗМЕРЫ</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Размеры <span className="text-orange-500">изоляционных трубок</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {SIZES.map((s, i) => {
              const span =
                i === 0
                  ? "lg:col-span-4"
                  : i === 1
                  ? "lg:col-span-5"
                  : "lg:col-span-3";
              const grid =
                s.columns === 2
                  ? "grid-cols-2"
                  : s.columns === 3
                  ? "grid-cols-3"
                  : "grid-cols-3 sm:grid-cols-5";
              return (
                <div
                  key={s.title}
                  className={`group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-all duration-300 hover:border-orange-500/50 ${span}`}
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

                  <div className={`grid ${grid} gap-2`}>
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MarkingSection;