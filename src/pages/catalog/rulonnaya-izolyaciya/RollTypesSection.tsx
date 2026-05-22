import Icon from "@/components/ui/icon";
import {
  rollImages,
  coveringImages,
  rollSpoolImages,
} from "@/assets/rulonnaya-izolyaciya/assets";

type RollType = {
  num: string;
  name: string;
  subtitle: string;
  img: string;
  properties: string[];
  applications: string[];
};

const ROLL_TYPES: RollType[] = [
  {
    num: "1 / 7",
    name: "Рулоны Unionflex STD",
    subtitle: "Рулонный материал из вспененного каучука без дополнительного покрытия.",
    img: rollImages.stdSingle01,
    properties: [
      "Базовое исполнение",
      "Закрытая ячеистая структура",
      "Раскрой по месту монтажа",
      "Применение на инженерных поверхностях",
    ],
    applications: [
      "Воздуховоды",
      "Вентиляционные каналы",
      "Резервуары",
      "Трубопроводы большого диаметра",
    ],
  },
  {
    num: "2 / 7",
    name: "Рулоны Unionflex CM",
    subtitle: "Рулонный материал с самоклеящимся слоем.",
    img: rollSpoolImages.cmSpoolPeel01,
    properties: [
      "Ускоренный монтаж",
      "Клеевой слой на внутренней стороне",
      "Удобство раскроя",
      "Снижение количества монтажных операций",
    ],
    applications: [
      "Вентиляция",
      "Кондиционирование",
      "Внутренние инженерные системы",
      "Поверхности сложной формы",
    ],
  },
  {
    num: "3 / 7",
    name: "Рулоны Unionflex METALL",
    subtitle: "Рулонный материал с покрытием из армированной алюминиевой фольги.",
    img: rollImages.metallSideClose01,
    properties: [
      "Защитное покрытие",
      "Дополнительная механическая стойкость",
      "Отражающая поверхность",
      "Применение на открытых участках",
    ],
    applications: [
      "Машинные отделения",
      "Технологические зоны",
      "Воздуховоды",
      "Участки с повышенными требованиями к защите",
    ],
  },
  {
    num: "4 / 7",
    name: "Рулоны Unionflex TITAN",
    subtitle: "Рулонный материал с комбинированным защитным покрытием.",
    img: coveringImages.titanSheetAngle01,
    properties: [
      "Комбинированное покрытие",
      "Защита наружного слоя",
      "Стойкость к эксплуатационным воздействиям",
      "Применение в сложных условиях",
    ],
    applications: [
      "Судовые технические помещения",
      "Наружные участки",
      "Зоны обслуживания",
      "Инженерные поверхности",
    ],
  },
  {
    num: "5 / 7",
    name: "Рулоны Unionflex PROM FORMA",
    subtitle: "Рулонный материал с покрытием из стеклоткани.",
    img: coveringImages.promformaSheetAngle01,
    properties: [
      "Армирующее покрытие",
      "Механическая защита",
      "Стойкость к рабочим нагрузкам",
      "Применение при повышенных требованиях к поверхности",
    ],
    applications: [
      "Промышленные зоны судна",
      "Машинные отделения",
      "Трубопроводы и воздуховоды",
      "Ремонтные участки",
    ],
  },
  {
    num: "6 / 7",
    name: "Рулоны Unionflex PROM FORMA FOIL",
    subtitle: "Рулонный материал с покрытием из стеклоткани и алюминиевой фольги.",
    img: coveringImages.promformaFoilSheetAngle01,
    properties: [
      "Комбинированная защита",
      "Армирующий слой",
      "Алюминиевое покрытие",
      "Применение при повышенных требованиях к защите",
    ],
    applications: [
      "Воздуховоды",
      "Резервуары",
      "Инженерные поверхности",
      "Зоны с внешними воздействиями",
    ],
  },
  {
    num: "7 / 7",
    name: "Рулоны Unionflex ALU",
    subtitle: "Рулонный материал с алюминиевым покрытием и ПЭТФ-плёнкой.",
    img: coveringImages.aluTextureClose01,
    properties: [
      "Алюминиевое покрытие",
      "Защитный наружный слой",
      "Применение на инженерных поверхностях",
      "Аккуратный внешний слой изоляции",
    ],
    applications: [
      "Вентиляционные каналы",
      "Воздуховоды",
      "Резервуары",
      "Технологические поверхности",
    ],
  },
];

const RollCard = ({ roll, reverse }: { roll: RollType; reverse: boolean }) => (
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
            src={roll.img}
            alt={roll.name}
            className="absolute inset-0 w-full h-full object-cover"
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
              {roll.num}
            </span>
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold">
            {roll.num}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-wide mb-3 leading-[1.2]">
          {roll.name}
        </h3>
        <p className="text-gray-400 text-[14px] sm:text-[15px] leading-[1.75] mb-8 sm:mb-9 max-w-2xl">
          {roll.subtitle}
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
              {roll.properties.map((p) => (
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
              {roll.applications.map((a) => (
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

export const RollTypesSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-orange-500" />
          <span className="t-label text-orange-400/90 tracking-[0.18em]">ТИПЫ</span>
        </div>
        <h2 className="t-h2 text-white mb-12 max-w-3xl">
          Типы <span className="text-orange-500">изоляционных рулонов</span>
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {ROLL_TYPES.map((roll, i) => (
            <RollCard key={roll.name} roll={roll} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RollTypesSection;
