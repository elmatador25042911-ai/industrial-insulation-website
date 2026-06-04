import Icon from "@/components/ui/icon";

type Step = {
  num: string;
  title: string;
  text: string;
  icon: string;
  visualIcon: string;
  visualCaption: string;
  img: string;
};

const CDN =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/termochekhly/itshmi_pantsir_process_images_FINAL_v2_ascii";

const STEPS: Step[] = [
  {
    num: "01",
    title: "Обсуждение / ТЗ",
    text: "Фиксируем задачу, тип оборудования, условия эксплуатации, температурный режим и требования к обслуживанию узла.",
    icon: "MessagesSquare",
    visualIcon: "ClipboardList",
    visualCaption: "Постановка задачи / техническое ТЗ",
    img: `${CDN}/process_01_discussion_tz_01.png`,
  },
  {
    num: "02",
    title: "Опросный лист",
    text: "Получаем исходные параметры по узлу: размеры, температура, место установки, количество, требования к съёмности и креплению.",
    icon: "FileSpreadsheet",
    visualIcon: "FileText",
    visualCaption: "Опросный лист / параметры узла",
    img: `${CDN}/process_02_questionnaire_01.png`,
  },
  {
    num: "03",
    title: "Предварительное КП",
    text: "Готовим предварительное коммерческое предложение на основании исходных данных и предполагаемой конструкции термочехла.",
    icon: "Calculator",
    visualIcon: "FileBarChart",
    visualCaption: "Предварительный расчёт / КП",
    img: `${CDN}/process_03_preliminary_kp_01.png`,
  },
  {
    num: "04",
    title: "Предварительный договор",
    text: "Согласовываем предварительные условия, состав работ, сроки и порядок дальнейшего обследования объекта.",
    icon: "FileSignature",
    visualIcon: "ScrollText",
    visualCaption: "Согласование условий / договор",
    img: `${CDN}/process_04_preliminary_contract_01.png`,
  },
  {
    num: "05",
    title: "Выезд на объект / подготовка КП",
    text: "Техспециалист выезжает на объект, уточняет размеры и особенности узлов, при необходимости выполняет замеры или сканирование.",
    icon: "Ruler",
    visualIcon: "ScanLine",
    visualCaption: "Замеры / 3D-сканирование узлов",
    img: `${CDN}/process_05_site_visit_scan_01.png`,
  },
  {
    num: "06",
    title: "Создание эскизов / лекал",
    text: "На основании замеров подготавливаются эскизы, лекала и техническая основа для изготовления термочехлов.",
    icon: "PenTool",
    visualIcon: "Shapes",
    visualCaption: "Эскизы / лекала / CAD-модель",
    img: `${CDN}/process_06_sketches_patterns_01.png`,
  },
  {
    num: "07",
    title: "Изготовление чехлов / доставка",
    text: "После согласования выполняется изготовление термочехлов и поставка готовых изделий на объект.",
    icon: "Factory",
    visualIcon: "Package",
    visualCaption: "Производство / упаковка / поставка",
    img: `${CDN}/process_07_manufacturing_delivery_01.png`,
  },
  {
    num: "08",
    title: "Шеф-монтаж / передача документации",
    text: "При необходимости выполняется сопровождение монтажа, проверка установки и передача документации по изделию.",
    icon: "HardHat",
    visualIcon: "ShieldHalf",
    visualCaption: "Монтаж на объекте / документация",
    img: `${CDN}/process_08_supervision_docs_01.png`,
  },
];

const StepVisual = ({ step }: { step: Step }) => (
  <div className="group relative">
    <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 blur-[40px]" />
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] bg-[#0c0c0e]">
      {/* Фото */}
      <img
        src={step.img}
        alt={step.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Сеточный фон поверх */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Угловые акценты */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />

      {/* Бейдж этапа */}
      <div
        className="absolute top-3 right-3 text-[11px] tracking-[0.2em] text-gray-200 px-2 py-1 rounded-sm border border-white/10 bg-black/50 backdrop-blur-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        ЭТАП {step.num}
      </div>

      {/* Подпись визуала снизу */}
      <div className="absolute left-6 right-6 bottom-5 flex items-center gap-2">
        <span className="h-px w-6 bg-orange-500/70 flex-shrink-0" />
        <span
          className="text-[11px] sm:text-[12px] tracking-[0.18em] text-gray-200 uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {step.visualCaption}
        </span>
      </div>

      {/* Виньетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,12,0.15) 0%, transparent 35%, transparent 60%, rgba(10,10,12,0.75) 100%)",
        }}
      />

      {/* Линия снизу */}
      <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
    </div>
  </div>
);

const StepRow = ({ step, index }: { step: Step; index: number }) => {
  const reversed = index % 2 === 1;
  return (
    <div className="relative">
      {/* Маркер таймлайна (десктоп) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 z-10">
        <div className="relative w-4 h-4 rounded-full bg-orange-500 ring-4 ring-[#0a0a0a]">
          <div className="absolute inset-0 rounded-full bg-orange-500/40 blur-md" />
        </div>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Текст */}
        <div className={`${reversed ? "lg:pl-10" : "lg:pr-10"} order-2 lg:order-none`}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[13px] tracking-[0.28em] text-orange-500/80 font-semibold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {step.num}
            </span>
            <span className="relative w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />
              <Icon name={step.icon} size={20} className="text-orange-400" />
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
          </div>

          <h3
            className="text-white text-[22px] sm:text-[26px] leading-tight mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
            }}
          >
            {step.title}
          </h3>

          <p className="text-gray-400 text-[15px] sm:text-base leading-[1.7]">
            {step.text}
          </p>
        </div>

        {/* Визуал с фото */}
        <div className="order-1 lg:order-none">
          <StepVisual step={step} />
        </div>
      </div>
    </div>
  );
};

export const ProcessSection = () => {
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
              ПРОЦЕСС
            </span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Как <span className="text-orange-500">мы работаем</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-[1.7]">
            Работа по термочехлам начинается с исходных данных по объекту и
            заканчивается изготовлением, поставкой и передачей документации по
            согласованному решению.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Вертикальная оранжевая линия (десктоп) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {STEPS.map((step, i) => (
              <StepRow key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;