import Icon from "@/components/ui/icon";

type Param = { label: string; value: string };

type Material = {
  num: string;
  title: string;
  params: Param[];
  img?: string;
};

const CDN =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/termochekhly/itshmi_pantsir_materials_fasteners_FINAL_ascii";

type Group = {
  num: string;
  icon: string;
  title: string;
  short: string;
  materials?: Material[];
  items?: string[];
};

const GROUPS: Group[] = [
  {
    num: "01",
    icon: "Shield",
    title: "Наружный защитный слой",
    short:
      "Наружный слой защищает теплоизоляционный материал от внешних воздействий и подбирается по температуре, условиям эксплуатации и требованиям к стойкости.",
    materials: [
      {
        num: "1.1",
        title: "Стеклоткань с двухсторонней силиконовой пропиткой",
        img: `${CDN}/1_1_fiberglass_silicone_impregnation.png`,
        params: [
          { label: "Горючесть", value: "Г1" },
          { label: "Рабочая температура", value: "от -60 до +250 °C" },
          { label: "Стойкость к агрессивным веществам", value: "Устойчива" },
        ],
      },
      {
        num: "1.2",
        title: "Стеклоткань с алюминизированным покрытием",
        img: `${CDN}/1_2_fiberglass_aluminized_coating.png`,
        params: [
          { label: "Горючесть", value: "НГ" },
          { label: "Рабочая температура", value: "до +330 °C" },
          { label: "Стойкость к агрессивным веществам", value: "Не устойчива" },
        ],
      },
      {
        num: "1.3",
        title: "Стеклоткань с ПУ-покрытием, армированная металлической нитью",
        img: `${CDN}/1_3_fiberglass_pu_coating_metal_thread.png`,
        params: [
          { label: "Горючесть", value: "Г1" },
          { label: "Рабочая температура", value: "до +450 °C" },
          { label: "Стойкость к агрессивным веществам", value: "Устойчива" },
        ],
      },
      {
        num: "1.4",
        title: "Кремнезёмная ткань с покрытием и без",
        img: `${CDN}/1_4_silica_fabric_coated_and_uncoated.png`,
        params: [
          { label: "Горючесть", value: "НГ" },
          { label: "Рабочая температура", value: "до +1100 °C" },
          { label: "Стойкость к агрессивным веществам", value: "Устойчива" },
        ],
      },
    ],
  },
  {
    num: "02",
    icon: "Layers",
    title: "Внутренний теплоизоляционный слой",
    short:
      "Внутренний слой подбирается по температуре поверхности, требуемой теплопроводности, плотности и условиям эксплуатации.",
    materials: [
      {
        num: "2.1",
        title: "Вспененный каучук",
        params: [
          { label: "Горючесть", value: "Г1" },
          { label: "Температура применения", value: "от -200 до +150 °C" },
          { label: "Плотность", value: "45–70 кг/м³" },
          { label: "λ20", value: "0,038 Вт/(м·°C)" },
        ],
      },
      {
        num: "2.2",
        title: "Каменная вата",
        params: [
          { label: "Горючесть", value: "НГ" },
          { label: "Температура применения", value: "до +680 °C" },
          { label: "Плотность", value: "80–130 кг/м³" },
          { label: "λ20", value: "0,034 Вт/(м·°C)" },
        ],
      },
      {
        num: "2.3",
        title: "Аэрогель",
        params: [
          { label: "Горючесть", value: "НГ / Г1" },
          { label: "Температура применения", value: "от -180 до +650 °C" },
          { label: "Плотность", value: "180 кг/м³" },
          { label: "λ20", value: "0,021 Вт/(м·°C)" },
        ],
      },
      {
        num: "2.4",
        title: "Кремнезёмная вата",
        params: [
          { label: "Горючесть", value: "НГ" },
          { label: "Температура применения", value: "до +1100 °C" },
          { label: "Плотность", value: "130 кг/м³" },
          { label: "λ20", value: "0,025 Вт/(м·°C)" },
        ],
      },
    ],
  },
  {
    num: "03",
    icon: "Link2",
    title: "Элементы крепления и фиксации",
    short:
      "Крепления подбираются под форму узла, требования к съёмности, доступу для обслуживания и условия эксплуатации.",
    items: [
      "Пружинный замок",
      "Люверсы",
      "Металлические крючки",
      "D-образные полукольца",
      "Мультифиламентный ремень",
      "Липучки ВЕЛКРО",
    ],
  },
];

const GroupHeader = ({ group }: { group: Group }) => (
  <div className="flex items-center gap-3 sm:gap-4 mb-5">
    <span
      className="text-[12px] sm:text-[13px] tracking-[0.28em] text-orange-500/80 font-semibold"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {group.num}
    </span>
    <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
      <Icon name={group.icon} size={20} className="text-orange-400" />
    </span>
    <h3
      className="text-white text-[20px] sm:text-[26px] leading-[1.05]"
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.01em",
      }}
    >
      {group.title}
    </h3>
    <span className="hidden sm:flex flex-1 items-center gap-2 ml-1 min-w-0">
      <span className="h-[2px] w-8 bg-orange-500 flex-shrink-0" />
      <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
    </span>
  </div>
);

const MaterialCard = ({ m }: { m: Material }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 flex flex-col h-full"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-0 left-0 z-20 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    {m.img && (
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#0c0c0e]">
        <img
          src={m.img}
          alt={m.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.55) 100%)",
          }}
        />
        <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
        <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-orange-500" />
      </div>
    )}

    <div className="p-5 sm:p-6 flex flex-col flex-1">
      <div className="flex items-start gap-3 mb-4">
        <span
          className="text-[12px] tracking-[0.22em] text-orange-500/80 font-semibold pt-1 flex-shrink-0"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {m.num}
        </span>
        <h4
          className="text-white text-[15px] sm:text-[16px] leading-[1.3] font-semibold"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.01em" }}
        >
          {m.title}
        </h4>
      </div>

      <div className="space-y-0 mt-auto">
        {m.params.map((p) => (
          <div
            key={p.label}
            className="flex items-start justify-between gap-3 py-2.5 border-t border-white/[0.06]"
          >
            <span
              className="text-[10.5px] sm:text-[11px] tracking-[0.18em] text-gray-500 uppercase leading-snug"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {p.label}
            </span>
            <span
              className="text-[13px] sm:text-[14px] text-white font-semibold text-right leading-snug"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {p.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </article>
);

const FixingChip = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2.5 px-4 py-3 rounded-sm border border-white/10 bg-white/[0.025] hover:border-orange-500/40 transition-colors">
    <span className="w-7 h-7 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center flex-shrink-0">
      <Icon name="Check" size={12} className="text-orange-400" />
    </span>
    <span className="text-gray-200 text-[13.5px] sm:text-[14px] font-medium leading-snug">
      {text}
    </span>
  </div>
);

export const CompositionSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
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
            <span className="t-label text-orange-400/90 tracking-[0.18em]">
              КОНСТРУКЦИЯ
            </span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Состав <span className="text-orange-500">термочехла</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Конструкция термочехла подбирается под температурный режим, форму
            узла, условия эксплуатации и требования к демонтажу при обслуживании
            оборудования.
          </p>
        </div>

        <div className="mt-14 space-y-14 sm:space-y-16">
          {GROUPS.map((group) => (
            <div key={group.num}>
              <GroupHeader group={group} />

              <p className="text-gray-400 text-[14.5px] sm:text-[15px] leading-[1.7] max-w-4xl mb-6 sm:mb-7">
                {group.short}
              </p>

              {group.materials && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {group.materials.map((m) => (
                    <MaterialCard key={m.num} m={m} />
                  ))}
                </div>
              )}

              {group.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {group.items.map((it) => (
                    <FixingChip key={it} text={it} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-orange-500/60 flex-shrink-0" />
          <p className="text-gray-500 text-[13.5px] sm:text-sm leading-[1.7]">
            Окончательный состав термочехла определяется по параметрам объекта,
            температуре поверхности, условиям эксплуатации, требованиям к
            съёмности и доступу для обслуживания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompositionSection;