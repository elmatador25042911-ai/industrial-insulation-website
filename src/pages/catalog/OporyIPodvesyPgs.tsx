import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import InternalLayout from "@/components/layouts/InternalLayout";
import PurposeSection from "./opory-i-podvesy-pgs/PurposeSection";
import ApplicationsSection from "./opory-i-podvesy-pgs/ApplicationsSection";
import ProductSection, { type ProductData } from "./opory-i-podvesy-pgs/ProductSection";
import SpecsSection, { type SpecsData } from "./opory-i-podvesy-pgs/SpecsSection";
import RequestSection from "./opory-i-podvesy-pgs/RequestSection";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/podves-pgs.jpg";

const BADGES = [
  { icon: "Component", text: "СОП «ПЕРИМЕТР»" },
  { icon: "Link", text: "Хотпайп" },
  { icon: "BadgeCheck", text: "Сделано в России" },
  { icon: "Factory", text: "Для ПГС и промышленности" },
];

const OPORY: ProductData = {
  id: "opory",
  label: "ОПОРЫ",
  title: "Опоры СОП «ПЕРИМЕТР»",
  image: HERO_IMG,
  imageCaption: "СОП «ПЕРИМЕТР»",
  description:
    "Опоры СОП «ПЕРИМЕТР» предназначены для крепления трубопроводов с опорой на металлоконструкции и строительные конструкции. Конструкция исключает прямой контакт трубопровода с опорой и предотвращает образование «мостиков холода».",
  advantages: [
    "Предотвращение образования «мостиков холода»",
    "Разгрузка теплоизоляционного слоя трубопровода",
    "Надёжное крепление трубопровода в проектном положении",
    "Применение на объектах ПГС и промышленности",
  ],
};

const OPORY_SPECS: SpecsData = {
  label: "ОПОРЫ",
  title: "Опоры СОП «ПЕРИМЕТР»",
  specs: [
    { name: "Назначение", value: "Крепление трубопроводов" },
    { name: "Тип крепления", value: "Опорное" },
    { name: "Область применения", value: "ПГС и промышленность" },
    { name: "Функция", value: "Предотвращение «мостиков холода»" },
  ],
  table: {
    columns: ["Толщина изоляции", "Диаметр трубы", "Ширина опорной вставки"],
    rows: [
      ["13 мм", "10–500 мм", "50 / 100 / 150 мм"],
      ["19 мм", "10–500 мм", "50 / 100 / 150 мм"],
      ["25 мм", "10–500 мм", "50 / 100 / 150 мм"],
      ["32 мм", "10–500 мм", "50 / 100 / 150 мм"],
      ["40 мм", "10–500 мм", "50 / 100 / 150 мм"],
      ["50 мм", "10–500 мм", "50 / 100 / 150 мм"],
      ["По ТЗ", "По ТЗ", "По ТЗ"],
    ],
    note: "Возможны другие комбинации размеров по индивидуальному техническому заданию.",
  },
};

const PODVESY: ProductData = {
  id: "podvesy",
  label: "ПОДВЕСЫ",
  title: "Подвесы Хотпайп",
  image: HERO_IMG,
  imageCaption: "ХОТПАЙП",
  description:
    "Подвесы Хотпайп предназначены для крепления трубопроводов с подвесом к перекрытиям и несущим конструкциям. Конструкция обеспечивает надёжную фиксацию и снижает теплопотери в узле крепления.",
  advantages: [
    "Предотвращение образования «мостиков холода»",
    "Разгрузка теплоизоляции трубопровода",
    "Надёжное крепление подвесных трубопроводов",
    "Применение на объектах ПГС и промышленности",
  ],
  reversed: true,
};

const PODVESY_SPECS: SpecsData = {
  label: "ПОДВЕСЫ",
  title: "Подвесы Хотпайп",
  specs: [
    { name: "Назначение", value: "Крепление трубопроводов" },
    { name: "Тип крепления", value: "Подвесное" },
    { name: "Область применения", value: "ПГС и промышленность" },
    { name: "Функция", value: "Предотвращение «мостиков холода»" },
  ],
  table: {
    columns: ["Толщина изоляции", "Диаметр трубы", "Ширина подвеса"],
    rows: [
      ["13 мм", "10–325 мм", "50 / 100 мм"],
      ["19 мм", "10–325 мм", "50 / 100 мм"],
      ["25 мм", "10–325 мм", "50 / 100 мм"],
      ["32 мм", "10–325 мм", "50 / 100 мм"],
    ],
    note: "Возможны другие комбинации размеров по индивидуальному техническому заданию.",
  },
};

const OporyIPodvesyPgs = () => {
  return (
    <InternalLayout>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section className="relative overflow-hidden">
          {/* Фоновое свечение */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[160px]" />
          </div>
          {/* Сетка */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
            {/* Хлебная крошка */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="h-px w-10 bg-orange-500 flex-shrink-0" />
              <span className="cat-label text-orange-400/90 leading-relaxed">
                КАТАЛОГ / ПРОМЫШЛЕННОЕ И ГРАЖДАНСКОЕ СТРОИТЕЛЬСТВО / ОПОРЫ И ПОДВЕСЫ
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Текстовая часть */}
              <div className="lg:col-span-6 xl:col-span-7">
                <h1 className="cat-h1 text-white">
                  <span className="text-orange-500">Опоры и подвесы</span>
                </h1>

                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mt-7">
                  Опорно-подвесные системы для трубопроводов и инженерных
                  коммуникаций. Предотвращают образование «мостиков холода»,
                  разгружают теплоизоляцию и обеспечивают надёжное крепление.
                </p>

                {/* Бейджи */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {BADGES.map((b) => (
                    <div
                      key={b.text}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                    >
                      <Icon
                        name={b.icon}
                        size={16}
                        className="text-orange-400 flex-shrink-0"
                      />
                      <span className="text-[13px] sm:text-sm text-gray-200 tracking-wide">
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
                  <a
                    href="#request"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide transition-colors rounded-sm"
                  >
                    Запросить подбор
                    <Icon
                      name="ArrowRight"
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                  <Link
                    to="/#catalog-pgs"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-orange-500 hover:text-orange-400 text-white font-semibold tracking-wide transition-colors rounded-sm"
                  >
                    <Icon name="ArrowLeft" size={18} />
                    Вернуться в каталог
                  </Link>
                </div>
              </div>

              {/* Технический плейсхолдер */}
              <div className="lg:col-span-6 xl:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
                  <div className="absolute -inset-2 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent blur-xl" />

                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 backdrop-blur-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
                    }}
                  >
                    {/* Hero-изображение (временное) */}
                    <img
                      src={HERO_IMG}
                      alt="Опоры и подвесы для трубопроводов"
                      loading="eager"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute left-6 right-6 bottom-6 z-10 flex items-end justify-between gap-3">
                      <div
                        className="text-[10px] sm:text-[11px] tracking-[0.22em] text-gray-300 uppercase"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        СОП «ПЕРИМЕТР»
                      </div>
                      <div
                        className="text-[10px] sm:text-[11px] tracking-[0.22em] text-gray-300 uppercase"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        ХОТПАЙП
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 88%, rgba(10,10,12,0.9) 100%)",
                      }}
                    />

                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-orange-500" />
                    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                  </div>

                  <div className="mt-4 flex items-center gap-3 text-[12px] tracking-[0.18em] text-gray-500 uppercase">
                    <span className="h-px w-6 bg-orange-500/60" />
                    <span>T1 ИЗОЛЯЦИЯ / ОПОРЫ И ПОДВЕСЫ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PurposeSection />
        <ApplicationsSection />
        <ProductSection data={OPORY} />
        <SpecsSection data={OPORY_SPECS} />
        <ProductSection data={PODVESY} />
        <SpecsSection data={PODVESY_SPECS} />
        <RequestSection />
      </main>
    </InternalLayout>
  );
};

export default OporyIPodvesyPgs;