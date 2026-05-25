import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import InternalLayout from "@/components/layouts/InternalLayout";
import { coveringImages } from "@/assets/zashchitnye-pokrytiya/assets";
import { TU_SUDOSTROENIE_UNION } from "@/lib/catalog-tu";

const BADGES = [
  { icon: "Shield", text: "METALL / TITAN" },
  { icon: "Layers", text: "PROM FORMA" },
  { icon: "Sparkles", text: "PROM FORMA FOIL / ALU" },
  { icon: "FileBadge", text: TU_SUDOSTROENIE_UNION },
];

const ZashchitnyePokrytiya = () => {
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
            {/* Хлебная крошка / надзаголовок */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="h-px w-10 bg-orange-500 flex-shrink-0" />
              <span className="t-label text-orange-400/90 tracking-[0.18em] leading-relaxed">
                КАТАЛОГ / СУДОСТРОЕНИЕ / ЗАЩИТНЫЕ ПОКРЫТИЯ
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Текстовая часть */}
              <div className="lg:col-span-6 xl:col-span-7">
                <h1
                  className="text-white leading-[0.95]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 5vw, 3.75rem)",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  Защитные покрытия
                  <br />
                  <span className="text-orange-500">для судостроения</span>
                </h1>

                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mt-7 mb-5">
                  Наружные покрытия Unionflex для защиты теплоизоляции судовых трубопроводов,
                  воздуховодов, резервуаров и инженерных поверхностей.
                </p>

                <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed max-w-2xl">
                  Покрытия применяются поверх теплоизоляции для защиты от влаги, механических
                  воздействий, ультрафиолета, атмосферных факторов и условий эксплуатации на
                  судах, верфях и в доках.
                </p>

                {/* Бейджи */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {BADGES.map((b) => (
                    <div
                      key={b.text}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                    >
                      <Icon name={b.icon} size={16} className="text-orange-400 flex-shrink-0" />
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
                    to="/#catalog-sudostroenie"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-orange-500 hover:text-orange-400 text-white font-semibold tracking-wide transition-colors rounded-sm"
                  >
                    <Icon name="ArrowLeft" size={18} />
                    Вернуться в каталог
                  </Link>
                </div>
              </div>

              {/* Изображение */}
              <div className="lg:col-span-6 xl:col-span-5">
                <div className="relative">
                  {/* Внешнее свечение */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-600/10 blur-[60px]" />
                  <div className="absolute -inset-2 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent blur-xl" />

                  {/* Стеклянная графитовая карточка */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 backdrop-blur-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 20% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 45%, rgba(10,10,12,0.95) 100%)",
                    }}
                  >
                    {/* Тонкая сетка внутри карточки */}
                    <div
                      className="absolute inset-0 opacity-[0.06] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />

                    {/* Фото покрытия */}
                    <img
                      src={coveringImages.stackEdge01}
                      alt="Защитные покрытия — стопка листов"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                    />

                    {/* Виньетка по краям */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 45%, rgba(10,10,12,0.55) 85%, rgba(10,10,12,0.9) 100%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]/20 pointer-events-none" />

                    {/* Оранжевые угловые акценты */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-orange-500" />
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-orange-500" />

                    {/* Тонкая оранжевая линия внизу */}
                    <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                  </div>

                  {/* Подпись под фото */}
                  <div className="mt-4 flex items-center gap-3 text-[12px] tracking-[0.18em] text-gray-500 uppercase">
                    <span className="h-px w-6 bg-orange-500/60" />
                    <span>T1 ИЗОЛЯЦИЯ / ЗАЩИТНЫЕ ПОКРЫТИЯ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </InternalLayout>
  );
};

export default ZashchitnyePokrytiya;
