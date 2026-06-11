import Icon from "@/components/ui/icon";

type Row = { temp: string; value: string; calc?: boolean };

type Table = { name: string; rows: Row[] };

const TABLES: Table[] = [
  {
    name: "RWL 100",
    rows: [
      { temp: "50", value: "0,040" },
      { temp: "100", value: "0,046" },
      { temp: "125", value: "0,049", calc: true },
      { temp: "150", value: "0,054" },
      { temp: "200", value: "0,064" },
      { temp: "250", value: "0,077" },
      { temp: "300", value: "0,092" },
      { temp: "350", value: "0,111" },
    ],
  },
  {
    name: "RWL 150",
    rows: [
      { temp: "50", value: "0,040" },
      { temp: "100", value: "0,046" },
      { temp: "125", value: "0,049", calc: true },
      { temp: "150", value: "0,053" },
      { temp: "200", value: "0,062" },
      { temp: "250", value: "0,073" },
      { temp: "300", value: "0,085" },
      { temp: "350", value: "0,099" },
    ],
  },
];

const ThermalTable = ({ t }: { t: Table }) => (
  <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e]">
    <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500" />

    {/* Заголовок таблицы */}
    <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
      <div className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center flex-shrink-0">
        <Icon name="Cylinder" size={18} className="text-orange-400" />
      </div>
      <span
        className="text-white text-[18px] sm:text-[20px]"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {t.name}
      </span>
    </div>

    {/* Шапка столбцов */}
    <div className="grid grid-cols-2 px-6 py-3 border-b border-white/10 bg-white/[0.02]">
      <span className="text-[11px] tracking-[0.16em] text-gray-400 uppercase">
        Температура, °C
      </span>
      <span className="text-[11px] tracking-[0.16em] text-gray-400 uppercase text-right">
        λ, Вт/(м·К)
      </span>
    </div>

    {/* Строки */}
    <div className="divide-y divide-white/[0.06]">
      {t.rows.map((r) => (
        <div
          key={r.temp}
          className="grid grid-cols-2 px-6 py-2.5 hover:bg-orange-500/[0.04] transition-colors"
        >
          <span className="flex items-center gap-2 text-white font-mono text-[14px] tracking-wide">
            {r.temp}
            {r.calc && (
              <span className="text-[9px] tracking-[0.12em] text-orange-400/80 uppercase border border-orange-500/30 rounded-sm px-1.5 py-0.5">
                расч.
              </span>
            )}
          </span>
          <span className="text-orange-300 font-mono text-[14px] tracking-wide text-right tabular-nums">
            {r.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const CylinderThermalSection = () => {
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
            <span className="cat-label text-orange-400/90">ТЕПЛОПРОВОДНОСТЬ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Теплопроводность{" "}
            <span className="text-orange-500">навивных цилиндров</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Коэффициент теплопроводности зависит от средней температуры теплоизоляционного слоя и
            марки цилиндра. Значения приведены в Вт/(м·К).
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {TABLES.map((t) => (
            <ThermalTable key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4">
          <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-[13px] leading-[1.6]">
            Значения при +125 °C являются расчётными. Для окончательного теплотехнического расчёта
            необходимо учитывать рабочую температуру, толщину изоляции, условия эксплуатации и
            конструкцию покровного слоя.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CylinderThermalSection;
