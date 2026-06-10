import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Point = { title: string; icon: string; text: string };

const POINTS: Point[] = [
  {
    title: "Тип поверхности",
    icon: "Pipette",
    text: "трубопровод, воздуховод, оборудование, резервуар",
  },
  {
    title: "Условия эксплуатации",
    icon: "CloudSun",
    text: "помещение, улица, влажность, УФ, осадки",
  },
  {
    title: "Тип защиты",
    icon: "ShieldCheck",
    text: "покровный материал или металлическая окожушка",
  },
  {
    title: "Результат",
    icon: "ClipboardCheck",
    text: "рекомендованный материал и состав поставки",
  },
];

const PointItem = ({ p }: { p: Point }) => (
  <div className="relative rounded-sm border border-white/10 bg-white/[0.02] hover:border-orange-500/40 transition-colors p-4">
    <div className="flex items-center gap-2.5 mb-2">
      <span className="w-8 h-8 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={p.icon} size={15} className="text-orange-400" />
      </span>
      <h4
        className="text-white text-[13.5px] leading-tight"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
        }}
      >
        {p.title}
      </h4>
    </div>
    <p className="text-gray-400 text-[13px] leading-[1.55]">{p.text}</p>
  </div>
);

export const RequestSection = () => {
  return (
    <section id="request" className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-0 w-[600px] h-[600px] rounded-full bg-orange-500/[0.06] blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Левая колонка */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="cat-label text-orange-400/90">ЗАПРОС ПОДБОРА</span>
            </div>
            <h2 className="cat-h2 text-white">
              Подбор защитного материала{" "}
              <span className="text-orange-500">под объект</span>
            </h2>
            <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mt-6">
              Для подбора защитного материала передайте параметры объекта: тип изоляции, место
              монтажа, условия эксплуатации, воздействие влаги, ультрафиолета, осадков и
              механических нагрузок.
            </p>
            <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-4">
              По этим данным подбирается подходящее исполнение: АЛМ, АЛФ, МБР, ПВХ, СТХ или
              металлические окожушки.
            </p>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
              <a
                href="tel:+78126426742"
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

          {/* Правая колонка — единая тёмная панель */}
          <div className="lg:col-span-6">
            <div
              className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7"
              style={{ boxShadow: "0 30px 80px -25px rgba(0,0,0,0.8)" }}
            >
              {/* Верхняя оранжевая полоса */}
              <div className="absolute top-0 left-0 h-[3px] w-24 bg-gradient-to-r from-orange-500 to-orange-600" />
              {/* Угловые акценты */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-orange-500/60" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-orange-500/60" />

              <div className="flex items-center gap-2.5 mb-5">
                <Icon name="ListChecks" size={18} className="text-orange-400" />
                <h3
                  className="text-white text-[17px] sm:text-[19px]"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  Что нужно для подбора
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {POINTS.map((p) => (
                  <PointItem key={p.title} p={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;
