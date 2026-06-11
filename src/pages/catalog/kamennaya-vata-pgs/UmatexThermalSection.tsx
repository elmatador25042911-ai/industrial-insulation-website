import Icon from "@/components/ui/icon";

type Row = { temp: string; value: string };

const ROWS: Row[] = [
  { temp: "10", value: "0,034" },
  { temp: "125", value: "0,048" },
  { temp: "200", value: "0,057" },
  { temp: "300", value: "0,073" },
  { temp: "400", value: "0,094" },
  { temp: "500", value: "0,118" },
];

export const UmatexThermalSection = () => {
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
            <span className="cat-label text-orange-400/90">ТЕПЛОПРОВОДНОСТЬ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Теплопроводность{" "}
            <span className="text-orange-500">ЮМАТЕКС ТЕРМО Pro Wired Mat 100</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Коэффициент теплопроводности прошивного мата зависит от средней температуры
            теплоизоляционного слоя. Значения приведены в Вт/(м·К).
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Таблица — компактная, не на всю ширину */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e]">
            <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500" />

            <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
              <div className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center flex-shrink-0">
                <Icon name="Grid2x2" size={18} className="text-orange-400" />
              </div>
              <span
                className="text-white text-[16px] sm:text-[18px]"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                Pro Wired Mat 100
              </span>
            </div>

            <div className="grid grid-cols-2 px-6 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="text-[11px] tracking-[0.16em] text-gray-400 uppercase">
                Температура, °C
              </span>
              <span className="text-[11px] tracking-[0.16em] text-gray-400 uppercase text-right">
                λ, Вт/(м·К)
              </span>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {ROWS.map((r) => (
                <div
                  key={r.temp}
                  className="grid grid-cols-2 px-6 py-2.5 hover:bg-orange-500/[0.04] transition-colors"
                >
                  <span className="text-white font-mono text-[14px] tracking-wide">
                    {r.temp}
                  </span>
                  <span className="text-orange-300 font-mono text-[14px] tracking-wide text-right tabular-nums">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Примечание рядом с таблицей */}
          <div className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-5 self-start">
            <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-400 text-[13.5px] leading-[1.65]">
              Для окончательного теплотехнического расчёта необходимо учитывать рабочую
              температуру, толщину материала, условия эксплуатации, способ монтажа и конструкцию
              наружного защитного слоя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmatexThermalSection;
