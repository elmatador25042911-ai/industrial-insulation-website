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
    <section className="relative overflow-hidden border-t border-white/5">
      {/* Фоновое свечение */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.04] blur-[160px]" />
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
              ТЕХНИЧЕСКИЕ ДАННЫЕ
            </span>
          </div>
          <h2 className="t-h2 text-white mb-5">
            Технические параметры{" "}
            <span className="text-orange-500">ЗМ.ПАНЦИРЬ.АК</span>
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-base leading-[1.7]">
            Параметры приведены для предварительной оценки применимости покрытия.
            Окончательный подбор выполняется по условиям объекта, температуре
            поверхности, влажности среды, площади нанесения и требованиям к
            покрытию.
          </p>
        </div>

        {/* Сетка параметров */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
          {SPECS.map((s) => (
            <div
              key={s.label}
              className="group relative flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] px-5 py-4 transition-colors duration-300 hover:border-orange-500/40"
            >
              <span
                className={`absolute left-0 top-0 bottom-0 w-[2px] ${
                  s.accent ? "bg-orange-500" : "bg-white/10"
                }`}
              />
              <span className="text-gray-400 text-[13px] sm:text-[14px] leading-[1.5] sm:w-[44%] flex-shrink-0">
                {s.label}
              </span>
              <span
                className={`text-[14px] sm:text-[15px] leading-[1.5] ${
                  s.accent ? "text-orange-300" : "text-white"
                }`}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Примечание */}
        <div className="mt-8 flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-5 py-4">
          <span className="h-px w-6 bg-orange-500 mt-3 flex-shrink-0" />
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
