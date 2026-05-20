import Icon from "@/components/ui/icon";
import { tubeImages } from "@/assets/trubnaya-izolyaciya/assets";

type TubeType = {
  num: string;
  name: string;
  subtitle: string;
  img: keyof typeof tubeImages;
  properties: string[];
  applications: string[];
};

const TUBE_TYPES: TubeType[] = [
  {
    num: "1 / 6",
    name: "Трубки T1 STD",
    subtitle: "Трубка из вспененного каучука без покрытия",
    img: "stdAngle01",
    properties: [
      "Сохраняют поверхности от экстремальных температур",
      "Не накапливают и не впитывают влагу",
      "Высокая эластичность и гибкость",
      "Удобны в монтаже",
    ],
    applications: [
      "Отопление",
      "Водоснабжение и канализация",
      "Вентиляция и кондиционирование",
      "Технологические трубопроводы",
      "Холодильные и криогенные системы",
    ],
  },
  {
    num: "2 / 6",
    name: "Трубки T1 CM",
    subtitle: "Трубка из вспененного каучука с самоклеящимся слоем",
    img: "cmAngle01",
    properties: [
      "Защита труб от механических повреждений, коррозии и конденсата",
      "Не накапливает влагу, защищает от плесени и протечек",
      "Высокая эластичность и гибкость",
      "Удобный монтаж за счёт самоклеящегося слоя",
    ],
    applications: ["Водоснабжение и канализация", "Кондиционирование"],
  },
  {
    num: "3 / 6",
    name: "Трубки T1 METALL",
    subtitle: "Трубка из вспененного каучука с покрытием из армированной алюминиевой фольги",
    img: "metallAngle01",
    properties: [
      "Защита от механических повреждений",
      "Отражение УФ-лучей",
      "Защита изоляции на открытых участках",
    ],
    applications: ["Вентиляция", "Кондиционирование", "Инженерные коммуникации"],
  },
  {
    num: "4 / 6",
    name: "Трубки T1 TITAN",
    subtitle: "Трубка из вспененного каучука с комбинированным защитным покрытием",
    img: "titanAngle01",
    properties: [
      "Устойчивость к высоким температурам",
      "Низкая дымообразующая способность",
      "Защита от механических повреждений, химического воздействия и влаги",
    ],
    applications: ["Топливная промышленность", "Нефтегазовая отрасль", "Химическая отрасль"],
  },
  {
    num: "5 / 6",
    name: "Трубки T1 PROM FORMA",
    subtitle: "Трубка из вспененного каучука с покрытием из стеклоткани",
    img: "promformaFront01",
    properties: [
      "Высокая механическая прочность",
      "Низкая дымообразующая способность",
      "Эластичность при высоких и низких температурах",
      "Стойкость к тяжёлым условиям эксплуатации",
    ],
    applications: [
      "Промышленное и гражданское строительство",
      "Энергетика",
      "Судостроение и кораблестроение",
      "Топливная промышленность",
    ],
  },
  {
    num: "6 / 6",
    name: "Трубки T1 PROM FORMA FOIL",
    subtitle: "Трубка из вспененного каучука с покрытием из стеклоткани и алюминиевой фольги",
    img: "promformaFoilFront01",
    properties: [
      "Устойчивость к высоким температурам",
      "Низкая дымообразующая способность",
      "Устойчивость к маслам и нефтепродуктам",
      "Дополнительная отражающая защита",
    ],
    applications: [
      "Теплотрассы",
      "Танкеры",
      "Ёмкости и резервуары для нефтепродуктов",
      "Промышленные трубопроводы",
    ],
  },
];

const TubeCard = ({ tube, reverse }: { tube: TubeType; reverse: boolean }) => (
  <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e]">
    <div className="absolute top-0 left-0 h-[2px] w-20 bg-orange-500" />

    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-2 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      {/* Фото */}
      <div className="lg:col-span-5 relative">
        <div
          className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 90% at 30% 0%, rgba(255,138,0,0.10) 0%, rgba(20,20,22,0.85) 50%, rgba(10,10,12,0.95) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <img
            src={tubeImages[tube.img]}
            alt={tube.name}
            className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10"
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 90%, rgba(10,10,12,0.9) 100%)",
            }}
          />
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
          <div className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

          {/* Бейдж с номером */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-sm border border-orange-500/40 bg-[#0a0a0a]/70 backdrop-blur-sm">
            <span className="text-[11px] tracking-[0.22em] text-orange-300 font-semibold">
              {tube.num}
            </span>
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold">
            {tube.num}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-wide mb-3 leading-[1.2]">
          {tube.name}
        </h3>
        <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.75] mb-8 sm:mb-9 max-w-2xl">
          {tube.subtitle}
        </p>

        <div className="h-px w-full bg-white/5 mb-7 sm:mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          {/* Свойства */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Icon name="CheckCircle2" size={16} className="text-orange-400" />
              <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold uppercase">
                Свойства
              </span>
            </div>
            <ul className="space-y-3.5">
              {tube.properties.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-[9px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="text-gray-200 text-[14px] sm:text-[14.5px] leading-[1.7]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Области применения */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Icon name="Layers" size={16} className="text-orange-400" />
              <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold uppercase">
                Области применения
              </span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {tube.applications.map((a) => (
                <span
                  key={a}
                  className="px-3 py-2 rounded-sm border border-white/10 bg-white/[0.03] text-gray-200 text-[13px] leading-[1.5] hover:border-orange-500/40 transition-colors"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TubeTypesSection = () => {
  return (
    <section className="relative border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="t-label text-orange-400/90 tracking-[0.18em]">КАТАЛОГ ТИПОВ</span>
        </div>
        <h2 className="t-h2 text-white mb-12 max-w-3xl">
          Типы <span className="text-orange-500">трубок</span>
        </h2>

        <div className="flex flex-col gap-5 sm:gap-6">
          {TUBE_TYPES.map((tube, i) => (
            <TubeCard key={tube.name} tube={tube} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TubeTypesSection;