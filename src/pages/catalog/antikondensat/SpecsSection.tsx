import Icon from "@/components/ui/icon";

const SPECS: { label: string; value: string; accent?: boolean }[] = [
  {
    label: "Наименование",
    value: "Покрытие защитное антиконденсатное ЗМ.ПАНЦИРЬ.АК",
    accent: true,
  },
  {
    label: "Назначение",
    value:
      "Снижение риска образования конденсата на поверхности трубопроводов, оборудования и металлических конструкций",
  },
  { label: "ТУ", value: "ТУ 20.59.59-005-85495285-2020", accent: true },
  { label: "Фасовка", value: "3 л / 10 л / 20 л" },
  {
    label: "Температура окрашиваемой поверхности при нанесении",
    value: "от +5 до +120 °C",
    accent: true,
  },
  {
    label: "Эксплуатационный температурный диапазон",
    value: "от −60 до +200 °C",
    accent: true,
  },
  {
    label: "Теоретический расход",
    value: "0,55 л/м² при однослойном покрытии толщиной 0,5 ±10% мм",
  },
  { label: "Толщина одного слоя", value: "не более 0,4–0,5 мм" },
  {
    label: "Способ нанесения",
    value: "кисть, воздушный или безвоздушный распылитель",
  },
  { label: "Разбавление", value: "допускается водой 3–7%" },
  {
    label: "Время высыхания одного слоя",
    value: "до 24 часов при температуре около +20 °C",
  },
  {
    label: "Полное формирование защитных свойств",
    value:
      "не менее 21 суток при температуре воздуха не ниже +20 °C и относительной влажности не более 80%",
  },
  {
    label: "Плотность материала при +20 °C",
    value: "не менее 600 кг/м³",
  },
  { label: "Массовая доля нелетучих веществ", value: "не менее 53%" },
  { label: "pH", value: "7,5–11,0" },
  {
    label: "Адгезия к бетону, кирпичу и стали",
    value: "не менее 0,8 МПа",
  },
  {
    label: "Коэффициент теплопроводности материала",
    value: "0,032 ±10% Вт/(м·°C)",
    accent: true,
  },
  {
    label: "Коэффициент паропроницаемости покрытия",
    value: "0,02 мг/(м·ч·Па)",
  },
  {
    label: "Срок годности",
    value:
      "2 года со дня изготовления при соблюдении условий хранения и транспортирования",
  },
];

const SpecsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black/25">
      {/* Фоновое свечение — приглушённое (спокойный блок) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.03] blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ak-section">
        <div className="ak-head">
          <div className="ak-label-row">
            <span className="h-px w-10 bg-orange-500" />
            <span className="ak-label text-orange-400/90">
              ТЕХНИЧЕСКИЕ ДАННЫЕ
            </span>
          </div>
          <h2 className="ak-h2 text-white">
            Технические параметры{" "}
            <span className="text-orange-500">ЗМ.ПАНЦИРЬ.АК</span>
          </h2>
          <p className="ak-text text-gray-400">
            Параметры приведены для предварительной оценки применимости покрытия.
            Окончательный подбор выполняется по условиям объекта, температуре
            поверхности, влажности среды, площади нанесения и требованиям к
            покрытию.
          </p>
        </div>

        {/* Таблица параметров */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#0e0e10] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
          {/* Шапка таблицы */}
          <div
            className="hidden sm:grid grid-cols-[minmax(0,42%)_minmax(0,58%)] border-b border-white/10 bg-white/[0.03] px-6 py-3.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">
              Параметр
            </span>
            <span className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">
              Значение
            </span>
          </div>

          {/* Строки */}
          {SPECS.map((s, i) => (
            <div
              key={s.label}
              className={`group relative grid grid-cols-1 sm:grid-cols-[minmax(0,42%)_minmax(0,58%)] gap-1 sm:gap-6 px-6 py-3.5 transition-colors duration-200 hover:bg-white/[0.025] ${
                i !== SPECS.length - 1 ? "border-b border-white/[0.06]" : ""
              } ${i % 2 === 1 ? "bg-white/[0.012]" : ""}`}
            >
              {s.accent && (
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-500" />
              )}
              <span className="text-gray-400 text-[13px] sm:text-[14px] leading-[1.55]">
                {s.label}
              </span>
              <span
                className={`text-[14px] sm:text-[15px] leading-[1.55] ${
                  s.accent ? "text-orange-300 font-medium" : "text-white"
                }`}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-6 flex items-start gap-3 rounded-sm border-l-2 border-orange-500/60 border-y border-r border-white/10 bg-white/[0.025] px-5 py-4">
          <Icon
            name="Info"
            size={16}
            className="text-orange-400 mt-0.5 flex-shrink-0"
          />
          <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[1.7]">
            Практический расход зависит от способа нанесения, шероховатости, формы
            поверхности и условий выполнения работ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;