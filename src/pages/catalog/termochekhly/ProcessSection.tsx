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

const StepCard = ({ step }: { step: Step }) => (
  <article
    className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-colors duration-300 hover:border-orange-500/40 flex flex-col h-full"
    style={{ boxShadow: "0 24px 60px -25px rgba(0,0,0,0.8)" }}
  >
    <div className="absolute top-0 left-0 z-20 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

    {/* Изображение сверху */}
    <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#0c0c0e]">
      <img
        src={step.img}
        alt={step.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(10,10,12,0.6) 100%)",
        }}
      />
      <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
      <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-orange-500" />
      <div
        className="absolute top-2 right-2 text-[11px] tracking-[0.2em] text-gray-200 px-2 py-1 rounded-sm border border-white/10 bg-black/50 backdrop-blur-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        ЭТАП {step.num}
      </div>
    </div>

    {/* Текст снизу */}
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
        <span className="relative w-9 h-9 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
          <Icon name={step.icon} size={18} className="text-orange-400" />
        </span>
        <h3
          className="text-white text-[17px] sm:text-[19px] leading-[1.15]"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
          }}
        >
          {step.title}
        </h3>
      </div>

      <p className="text-gray-400 text-[14px] leading-[1.7]">{step.text}</p>
    </div>
  </article>
);

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

        {/* Сетка карточек этапов */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STEPS.map((step) => (
            <StepCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;