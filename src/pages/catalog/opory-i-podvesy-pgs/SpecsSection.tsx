import Icon from "@/components/ui/icon";

export interface SpecsData {
  label: string;
  title: string;
  specs: { name: string; value: string }[];
  table: {
    columns: string[];
    rows: string[][];
    note?: string;
  };
}

export const SpecsSection = ({ data }: { data: SpecsData }) => (
  <section className="relative overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {/* Характеристики */}
        <div
          className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-8"
          style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
        >
          <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500" />
          <div className="flex items-center gap-3 mb-6">
            <Icon name="ListChecks" size={18} className="text-orange-400" />
            <h3
              className="text-white text-[20px] leading-none"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Характеристики
            </h3>
          </div>
          <div className="space-y-0">
            {data.specs.map((s) => (
              <div
                key={s.name}
                className="flex items-start justify-between gap-4 py-3 border-t border-white/[0.06]"
              >
                <span className="text-gray-500 text-[13.5px] leading-snug">{s.name}</span>
                <span className="text-white text-[13.5px] font-medium text-right leading-snug">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Таблица параметров */}
        <div
          className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-8"
          style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
        >
          <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500" />
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Table2" size={18} className="text-orange-400" />
            <h3
              className="text-white text-[20px] leading-none"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Параметры
            </h3>
          </div>

          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  {data.table.columns.map((c) => (
                    <th
                      key={c}
                      className="text-[11px] tracking-[0.06em] text-orange-400/90 uppercase font-semibold pb-3 pr-3 align-bottom"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-white/[0.07]">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`py-3 pr-3 text-[13px] leading-snug ${
                          j === 0 ? "text-white font-medium" : "text-gray-300"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data.table.note && (
            <p className="text-gray-500 text-[12.5px] leading-snug mt-5 pt-4 border-t border-white/[0.06]">
              {data.table.note}
            </p>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default SpecsSection;
