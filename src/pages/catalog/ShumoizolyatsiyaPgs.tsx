import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import InternalLayout from "@/components/layouts/InternalLayout";
import VariantsSection from "./shumoizolyatsiya-pgs/VariantsSection";
import ApplicationsSection from "./shumoizolyatsiya-pgs/ApplicationsSection";
import RequestSection from "./termochekhly/RequestSection";

const HERO_IMG =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/shumoizol-pgs.png";

const BADGES = [
  { icon: "Layers", text: "Стандарт" },
  { icon: "Layers2", text: "Стандарт-AL" },
  { icon: "Layers3", text: "Премиум-AL" },
  { icon: "AudioWaveform", text: "R500 до 32 дБ" },
  { icon: "Ruler", text: "Толщина 12–16 мм" },
  { icon: "AlignJustify", text: "1–5 слоёв" },
];

const ShumoizolyatsiyaPgs = () => {
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
                КАТАЛОГ / ПРОМЫШЛЕННОСТЬ И ПГС / ШУМОИЗОЛЯЦИЯ
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Текстовая часть */}
              <div className="lg:col-span-6 xl:col-span-7">
                <h1 className="cat-h1 text-white">
                  <span className="text-orange-500">Шумоизоляция</span>
                </h1>

                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mt-7 mb-5">
                  Системы шумоизоляции инженерных коммуникаций для снижения шума
                  в жилых, общественных и промышленных зданиях.
                </p>

                <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed max-w-2xl">
                  Применяются для снижения воздушного шума от трубопроводов
                  водоотведения, канализации, ливнестоков, воздуховодов, венткамер,
                  газопроводов и компрессорных установок до нормативных значений по
                  СП 51.13330.2011.
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
                    Запросить расчёт
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
                  {/* Внешнее свечение */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
                  <div className="absolute -inset-2 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent blur-xl" />

                  {/* Графитовая product-card */}
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
                      alt="Системы шумоизоляции инженерных коммуникаций"
                      loading="eager"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Технический низ */}
                    <div className="absolute left-6 right-6 bottom-6 z-10 flex items-end justify-between gap-3">
                      <div
                        className="text-[10px] sm:text-[11px] tracking-[0.22em] text-gray-300 uppercase"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        R500 ДО 32 дБ
                      </div>
                      <div
                        className="text-[10px] sm:text-[11px] tracking-[0.22em] text-gray-300 uppercase"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        СП 51.13330.2011
                      </div>
                    </div>

                    {/* Виньетка */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 88%, rgba(10,10,12,0.9) 100%)",
                      }}
                    />

                    {/* Оранжевые угловые акценты */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-orange-500" />

                    {/* Тонкая оранжевая линия внизу */}
                    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                  </div>

                  {/* Подпись под карточкой */}
                  <div className="mt-4 flex items-center gap-3 text-[12px] tracking-[0.18em] text-gray-500 uppercase">
                    <span className="h-px w-6 bg-orange-500/60" />
                    <span>T1 ИЗОЛЯЦИЯ / ШУМОИЗОЛЯЦИЯ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VariantsSection />
        <ApplicationsSection />
        <RequestSection />
      </main>
    </InternalLayout>
  );
};

export default ShumoizolyatsiyaPgs;
