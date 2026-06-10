import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Point = { title: string; icon: string; text: string };

const POINTS: Point[] = [
  {
    title: "Тип поверхности",
    icon: "Pipette",
    text: "трубопровод, воздуховод, оборудование, резервуар или технологический участок",
  },
  {
    title: "Условия эксплуатации",
    icon: "CloudSun",
    text: "помещение, улица, влажная зона, УФ-воздействие, осадки или механические нагрузки",
  },
  {
    title: "Тип защиты",
    icon: "ShieldCheck",
    text: "покровный материал, мембранное покрытие, ПВХ-покрытие или металлическая окожушка",
  },
  {
    title: "Результат подбора",
    icon: "ClipboardCheck",
    text: "рекомендуемый материал, исполнение, ориентировочный объём и состав поставки",
  },
];

const PointCard = ({ p, index }: { p: Point; index: number }) => (
  <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.025] hover:border-orange-500/40 transition-colors p-5">
    <div
      className="absolute top-3 right-4 text-[11px] tracking-[0.2em] text-gray-600"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="flex items-center gap-2.5 mb-2.5 pr-8">
      <span className="w-9 h-9 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
        <Icon name={p.icon} size={16} className="text-orange-400" />
      </span>
      <h3
        className="text-white text-[14.5px] leading-tight"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.01em",
          textTransform: "uppercase",
        }}
      >
        {p.title}
      </h3>
    </div>
    <p className="text-gray-400 text-[13.5px] leading-[1.6]">{p.text}</p>
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl">
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
            монтажа, условия эксплуатации, наличие влаги, ультрафиолета, осадков, механических
            нагрузок и требования к внешнему виду покрытия.
          </p>
          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-4">
            По этим данным подбирается подходящее исполнение: АЛМ, АЛФ, МБР, ПВХ, СТХ или
            металлические окожушки.
          </p>
        </div>

        {/* 4 пункта */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {POINTS.map((p, i) => (
            <PointCard key={p.title} p={p} index={i} />
          ))}
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-12">
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
    </section>
  );
};

export default RequestSection;
