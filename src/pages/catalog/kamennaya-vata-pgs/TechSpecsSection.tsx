import Icon from "@/components/ui/icon";

type Spec = {
  title: string;
  density: string;
  temp: string;
  rows: string[];
};

type Group = { name: string; icon: string; cards: Spec[] };

const GROUPS: Group[] = [
  {
    name: "Цилиндры",
    icon: "Cylinder",
    cards: [
      {
        title: "ROCKWOOL / РОКВУЛ 100 Навивные цилиндры",
        density: "114 кг/м³",
        temp: "+650 °C",
        rows: [
          "Тип: навивной цилиндр из каменной ваты",
          "Плотность: 114 кг/м³, допуск ±12%",
          "Максимальная температура: +650 °C",
          "Горючесть: НГ; фольгированное исполнение — Г1, В1, Т1, Д1",
          "Водопоглощение: не более 1,0 кг/м²",
          "ТУ 5762-050-45757203-15",
        ],
      },
      {
        title: "ROCKWOOL / РОКВУЛ 150 Навивные цилиндры",
        density: "145 кг/м³",
        temp: "+680 °C",
        rows: [
          "Тип: навивной цилиндр повышенной плотности",
          "Плотность: 145 кг/м³, допуск ±12%",
          "Максимальная температура: +680 °C",
          "Горючесть: НГ",
          "Водопоглощение: не более 1,0 кг/м²",
          "ТУ 5762-050-45757203-15",
        ],
      },
      {
        title: "XOTPIPE / ХОТПАЙП Вырезные цилиндры SP 100",
        density: "100 кг/м³",
        temp: "+550 °C",
        rows: [
          "Тип: цилиндр с самофиксирующимся тепловым замком",
          "Плотность: 100 кг/м³",
          "Максимальная температура: +550 °C",
          "Горючесть: НГ / КМ0",
          "Исполнения: без покрытия, с алюминиевой фольгой, наружным защитным покрытием или металлической окожушкой",
          "ТУ 23.99.19-007-39049991-2021",
          "ГОСТ 23208-2003",
        ],
      },
    ],
  },
  {
    name: "Лёгкие и ламельные маты",
    icon: "Layers",
    cards: [
      {
        title: "ТЕХ МАТ",
        density: "43 кг/м³",
        temp: "+420 °C",
        rows: [
          "Тип: лёгкий непрошивной мат",
          "Плотность: 43 кг/м³, допуск ±10%",
          "Максимальная температура: +420 °C",
          "Горючесть: НГ; фольгированное исполнение — Г1, В1, Т1, Д1",
          "Коэффициент монтажного уплотнения: 1,2",
          "Водопоглощение: не более 1,0 кг/м²",
          "ТУ 5762-050-45757203-15",
        ],
      },
      {
        title: "ЛАМЕЛЛА МАТ",
        density: "43 кг/м³",
        temp: "+250 °C",
        rows: [
          "Тип: ламельный мат с алюминиевой фольгой",
          "Плотность: 43 кг/м³, допуск ±10%",
          "Максимальная температура: +250 °C",
          "Горючесть: Г1, В1, Т1, Д1",
          "Водопоглощение: не более 1,0 кг/м²",
          "ТУ 5762-050-45757203-15",
        ],
      },
    ],
  },
  {
    name: "Прошивные маты",
    icon: "Grid2x2",
    cards: [
      {
        title: "ВАЙРЕД МАТ 50",
        density: "50 кг/м³",
        temp: "+520 °C",
        rows: [
          "Тип: прошивной мат с металлической сеткой",
          "Плотность: 50 кг/м³, допуск ±10%",
          "Максимальная температура: +520 °C",
          "Горючесть: НГ",
          "Коэффициент монтажного уплотнения: 1,2",
          "Водопоглощение: не более 1,0 кг/м²",
          "ТУ 5762-050-45757203-15",
        ],
      },
      {
        title: "ВАЙРЕД МАТ 105",
        density: "105 кг/м³",
        temp: "+660 °C",
        rows: [
          "Тип: плотный прошивной мат с металлической сеткой",
          "Плотность: 105 кг/м³, допуск ±10%",
          "Максимальная температура: +660 °C",
          "Горючесть: НГ; исполнение с армированной фольгой — Г1, В1, Т1, Д1",
          "Коэффициент монтажного уплотнения: 1,0",
          "Водопоглощение: не более 1,0 кг/м²",
          "ТУ 5762-050-45757203-15",
        ],
      },
      {
        title: "ЮМАТЕКС ТЕРМО Pro Wired Mat 100",
        density: "100 кг/м³",
        temp: "+660 °C",
        rows: [
          "Тип: прошивной мат на основе базальтовой ваты",
          "Плотность: 100 кг/м³",
          "Максимальная температура: +660 °C",
          "Горючесть: КМ0 / НГ",
          "Водопоглощение: не более 1,0 кг/м²",
          "Назначение: теплоизоляция и огнезащита оборудования, газоходов, вентиляционных каналов и поверхностей сложной формы",
        ],
      },
    ],
  },
];

const NOTES = [
  "Для исполнений с алюминиевой фольгой допустимая температура на поверхности покровного слоя может быть ниже максимальной температуры основного теплоизоляционного материала.",
  "Точные характеристики зависят от конкретной марки, исполнения, покрытия и условий эксплуатации.",
  "Размерные сетки цилиндров и матов будут приведены в следующих разделах страницы.",
];

const SpecCard = ({ s, index }: { s: Spec; index: number }) => (
  <article
    className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 p-6 flex flex-col h-full"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
    <div
      className="absolute top-4 right-4 text-[11px] tracking-[0.2em] text-gray-500"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>

    <h4
      className="text-white text-[16px] leading-tight mb-4 mt-1 pr-10"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.01em",
        textTransform: "uppercase",
      }}
    >
      {s.title}
    </h4>

    {/* Выделенные значения */}
    <div className="grid grid-cols-2 gap-3 mb-5">
      <div className="rounded-sm border border-orange-500/25 bg-orange-500/[0.06] px-3 py-2.5">
        <div className="text-[10px] tracking-[0.16em] text-gray-500 uppercase mb-1">
          Плотность
        </div>
        <div
          className="text-orange-300 text-[16px] leading-none"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          {s.density}
        </div>
      </div>
      <div className="rounded-sm border border-orange-500/25 bg-orange-500/[0.06] px-3 py-2.5">
        <div className="text-[10px] tracking-[0.16em] text-gray-500 uppercase mb-1">
          До темп.
        </div>
        <div
          className="text-orange-300 text-[16px] leading-none"
          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
        >
          {s.temp}
        </div>
      </div>
    </div>

    {/* Компактные строки параметров */}
    <ul className="divide-y divide-white/[0.06] mt-auto">
      {s.rows.map((r, i) => (
        <li key={i} className="flex items-start gap-2.5 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70 flex-shrink-0 mt-1.5" />
          <span className="text-gray-400 text-[12.5px] leading-[1.5]">{r}</span>
        </li>
      ))}
    </ul>
  </article>
);

const GroupBlock = ({ group }: { group: Group }) => (
  <div className="mt-12 first:mt-12">
    <div className="flex items-center gap-3 mb-6">
      <span className="w-9 h-9 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={group.icon} size={18} className="text-orange-400" />
      </span>
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
      <span className="flex-1 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {group.cards.map((s, i) => (
        <SpecCard key={s.title} s={s} index={i} />
      ))}
    </div>
  </div>
);

export const TechSpecsSection = () => {
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
            <span className="cat-label text-orange-400/90">ТЕХНИЧЕСКИЕ ДАННЫЕ</span>
          </div>
          <h2 className="cat-h2 text-white">
            Технические параметры{" "}
            <span className="text-orange-500">доступных решений</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
            Характеристики каменной ваты зависят от формы выпуска, плотности, конструкции покрытия
            и производителя. Ниже приведены параметры основных решений, применяемых для
            промышленной теплоизоляции и инженерных систем.
          </p>
        </div>

        {GROUPS.map((g) => (
          <GroupBlock key={g.name} group={g} />
        ))}

        {/* Технические примечания */}
        <div className="mt-10 space-y-3">
          {NOTES.map((n, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4"
            >
              <Icon name="Info" size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 text-[13px] leading-[1.6]">{n}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;