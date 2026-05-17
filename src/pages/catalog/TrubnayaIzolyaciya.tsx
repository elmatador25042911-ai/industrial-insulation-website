import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { tubeImages } from "@/assets/trubnaya-izolyaciya/assets";

const BADGES = [
  { icon: "Thermometer", text: "от −200 до +110 °C" },
  { icon: "Flame", text: "Г1 / В1" },
  { icon: "Droplets", text: "μ ≥ 10 000" },
];

const SPECS: { label: string; value: string; icon: string }[] = [
  { label: "Группа горючести", value: "Г1", icon: "Flame" },
  { label: "Группа воспламеняемости", value: "В1", icon: "Sparkles" },
  { label: "Дымообразующая способность", value: "Д3", icon: "CloudFog" },
  { label: "Показатель токсичности", value: "Т2", icon: "AlertTriangle" },
  { label: "Температура применения", value: "от −200 до +110 °C", icon: "Thermometer" },
  { label: "Сопротивление диффузии пара, μ", value: "≥ 10 000", icon: "Droplets" },
  { label: "Теплопроводность при 0 °C", value: "0,034 Вт/(м·°C)", icon: "Snowflake" },
];

const APPLICATIONS: { icon: string; title: string; text: string }[] = [
  {
    icon: "Droplet",
    title: "Трубы водопровода",
    text: "Теплоизоляция труб систем водоснабжения и инженерных коммуникаций.",
  },
  {
    icon: "Flame",
    title: "Трубы отопления",
    text: "Снижение теплопотерь и защита трубопроводов отопления.",
  },
  {
    icon: "Wind",
    title: "Вентиляционные системы",
    text: "Изоляция вентиляционных каналов и воздуховодов.",
  },
  {
    icon: "Snowflake",
    title: "Системы кондиционирования",
    text: "Защита трасс кондиционирования от конденсата и перепадов температур.",
  },
  {
    icon: "Factory",
    title: "Технологические трубопроводы",
    text: "Решения для промышленных линий и производственных объектов.",
  },
  {
    icon: "ThermometerSnowflake",
    title: "Холодильные и криогенные системы",
    text: "Изоляция систем с низкотемпературными режимами эксплуатации.",
  },
];

const MARKING_PARTS: { code: string; label: string; accent?: boolean }[] = [
  { code: "T1", label: "Бренд" },
  { code: "HD", label: "Марка продукции" },
  { code: "09", label: "Толщина стенки, мм" },
  { code: "042", label: "Внутренний диаметр, мм" },
  { code: "1", label: "Длина, м" },
  { code: "METALL", label: "Вид покрытия" },
];

const SIZES: { title: string; unit: string; values: string[]; icon: string; columns: number }[] = [
  {
    title: "Толщина стенки",
    unit: "мм",
    values: ["06", "09", "13", "19", "25", "32"],
    icon: "Ruler",
    columns: 3,
  },
  {
    title: "Внутренний диаметр",
    unit: "мм",
    values: [
      "006", "008", "010", "012", "015",
      "018", "020", "022", "025", "028",
      "030", "035", "042", "048", "054",
      "057", "060", "064", "070", "076",
      "080", "089", "102", "108", "114",
      "125", "133", "140", "160",
    ],
    icon: "Circle",
    columns: 5,
  },
  {
    title: "Длина",
    unit: "м",
    values: ["1", "2"],
    icon: "MoveHorizontal",
    columns: 2,
  },
];

const COATINGS: { num: string; code: string; title: string; img: string }[] = [
  { num: "01", code: "STD", title: "Стандартный материал без покрытия", img: "stdAngle01" },
  { num: "02", code: "CM", title: "Трубка с самоклеящимся слоем", img: "cmAngle01" },
  { num: "03", code: "METALL", title: "Покрытие из армированной алюминиевой фольги", img: "metallAngle01" },
  { num: "04", code: "TITAN", title: "Комбинированное защитное покрытие", img: "titanAngle01" },
  { num: "05", code: "PROM FORMA", title: "Покрытие из стеклоткани", img: "promformaFront01" },
  { num: "06", code: "PROM FORMA FOIL", title: "Стеклоткань и алюминиевая фольга", img: "promformaFoilFront01" },
];

const DESCRIPTION_CARDS: { icon: string; title: string; text: string }[] = [
  {
    icon: "Thermometer",
    title: "Широкий диапазон температур",
    text: "Материал применяется при температурах от −200 до +110 °C, сохраняя структуру и теплоизоляционные свойства в любых инженерных системах.",
  },
  {
    icon: "ShieldCheck",
    title: "Пожарная безопасность",
    text: "Теплоизоляция из вспененного каучука относится к слабогорючим материалам и не поддерживает горение без источника открытого огня.",
  },
  {
    icon: "Snowflake",
    title: "Низкая теплопроводность",
    text: "Коэффициент теплопроводности — 0,034 Вт/(м·°C) при 0 °C. Это обеспечивает эффективное снижение теплопотерь на трубопроводах.",
  },
];

const TrubnayaIzolyaciya = () => {
  return (
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
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">
              КАТАЛОГ / ТРУБНАЯ ИЗОЛЯЦИЯ
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Текстовая часть */}
            <div className="lg:col-span-6 xl:col-span-7">
              <h1 className="t-h1 text-white leading-[0.95] mb-7">
                Трубная
                <br />
                <span className="text-orange-500">изоляция</span>
              </h1>

              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mb-5">
                Теплоизоляционные трубки из вспененного синтетического каучука для трубопроводов,
                инженерных систем, отопления, вентиляции и кондиционирования.
              </p>

              <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10">
                Материал применяется на гражданских и промышленных объектах для снижения
                теплопотерь, защиты трубопроводов от конденсата, влаги, перепадов температур и
                внешних воздействий.
              </p>

              {/* Бейджи */}
              <div className="flex flex-wrap gap-3 mb-10">
                {BADGES.map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                  >
                    <Icon name={b.icon} size={16} className="text-orange-400" />
                    <span className="text-[13px] sm:text-sm text-gray-200 tracking-wide">
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide transition-colors rounded-sm"
                >
                  Оставить заявку
                  <Icon
                    name="ArrowRight"
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/#catalog"
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

                  {/* Само фото с мягким вписыванием в фон */}
                  <img
                    src={tubeImages.allTypesAngle}
                    alt="Трубная изоляция — все типы трубок"
                    className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8 mix-blend-luminosity opacity-95"
                    style={{ filter: "contrast(1.05) saturate(0.9)" }}
                    loading="eager"
                  />
                  {/* Цветной слой поверх — возвращает естественные тона, но мягче */}
                  <img
                    src={tubeImages.allTypesAngle}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8 opacity-80"
                  />

                  {/* Виньетка по краям, чтобы белый фон фото растворился в карточке */}
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
                  <span>Т1 ИЗОЛЯЦИЯ / ТРУБНАЯ ИЗОЛЯЦИЯ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ключевые характеристики ── */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-orange-500/[0.06] blur-[140px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ХАРАКТЕРИСТИКИ</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Ключевые показатели <span className="text-orange-500">материала</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SPECS.map((s, i) => (
              <div
                key={s.label}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                <div className="flex items-start gap-3 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                    <Icon name={s.icon} size={18} className="text-orange-400" />
                  </div>
                  <span className="text-[11px] sm:text-[12px] tracking-[0.14em] text-gray-500 uppercase leading-snug pt-1">
                    {s.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-[26px] font-bold text-white leading-tight">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Описание материала ── */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ОПИСАНИЕ МАТЕРИАЛА</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Свойства <span className="text-orange-500">в трёх тезисах</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DESCRIPTION_CARDS.map((c, i) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#101012] p-7 transition-all duration-300 hover:border-orange-500/40"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-orange-500/[0.08] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 mb-5">
                  <span className="text-[11px] tracking-[0.2em] text-orange-500/80 font-semibold">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                  <Icon name={c.icon} size={20} className="text-orange-400" />
                </div>
                <h3 className="relative text-white text-lg font-semibold mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="relative text-gray-400 text-[14px] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Применение ── */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[520px] h-[520px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ПРИМЕНЕНИЕ</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Где применяется <span className="text-orange-500">трубная изоляция</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {APPLICATIONS.map((a, i) => (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                    <Icon name={a.icon} size={22} className="text-orange-400" />
                  </div>
                  <span className="text-[11px] tracking-[0.2em] text-orange-500/70 font-semibold">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-3 leading-snug">{a.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>

          {/* Подпись под карточками */}
          <div className="mt-10 relative overflow-hidden rounded-sm border border-orange-500/20 bg-[#0e0e10]">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-500" />
            <div className="flex items-start gap-4 p-6 sm:p-7">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-orange-500/10 flex items-center justify-center">
                <Icon name="Info" size={18} className="text-orange-400" />
              </div>
              <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
                Изоляция подходит для применения в помещениях, на открытом воздухе и под землёй.
                Для удобства монтажа доступны варианты <span className="text-white font-medium">с самоклеящимся слоем</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Варианты покрытий ── */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">ПОКРЫТИЯ</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Варианты <span className="text-orange-500">покрытий</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {COATINGS.map((c) => (
              <div
                key={c.code}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#101012] transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1"
              >
                {/* Фото */}
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 30% 0%, rgba(255,138,0,0.08) 0%, rgba(20,20,22,0.85) 50%, rgba(10,10,12,0.95) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <img
                    src={tubeImages[c.img as keyof typeof tubeImages]}
                    alt={c.code}
                    className="absolute inset-0 w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,12,0.55) 90%, rgba(10,10,12,0.9) 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-orange-500" />
                  <div className="absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                </div>

                {/* Текстовая часть */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] tracking-[0.22em] text-orange-500/70 font-semibold">
                      {c.num}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-white text-xl font-bold tracking-wide mb-2">{c.code}</h3>
                  <p className="text-gray-400 text-[14px] leading-relaxed">{c.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Как читать маркировку ── */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">МАРКИРОВКА</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Как читать <span className="text-orange-500">маркировку</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Слева — пример и расшифровка */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-7 sm:p-9">
              <div className="absolute top-0 left-0 h-[2px] w-16 bg-orange-500" />

              <div className="text-[11px] tracking-[0.22em] text-orange-500/80 font-semibold mb-4">
                ПРИМЕР МАРКИРОВКИ
              </div>

              {/* Сама маркировка */}
              <div className="relative overflow-x-auto pb-2 mb-8">
                <div className="flex items-end gap-1.5 sm:gap-2 font-mono">
                  <span className="text-gray-500 text-lg sm:text-xl pr-1">Трубка</span>
                  <span className="text-white text-xl sm:text-3xl font-bold">T1</span>
                  <span className="text-white text-xl sm:text-3xl font-bold">HD</span>
                  <span className="text-orange-400 text-xl sm:text-3xl font-bold">09</span>
                  <span className="text-gray-500 text-xl sm:text-3xl">×</span>
                  <span className="text-orange-400 text-xl sm:text-3xl font-bold">042</span>
                  <span className="text-gray-500 text-xl sm:text-3xl">-</span>
                  <span className="text-orange-400 text-xl sm:text-3xl font-bold">1</span>
                  <span className="text-white text-xl sm:text-3xl font-bold pl-2">METALL</span>
                </div>
                <div className="mt-2 h-px bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent" />
              </div>

              {/* Расшифровка */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MARKING_PARTS.map((p, i) => (
                  <div
                    key={p.code}
                    className="flex items-center gap-4 p-3 rounded-sm bg-white/[0.025] border border-white/5 hover:border-orange-500/40 transition-colors"
                  >
                    <div className="flex-shrink-0 min-w-[64px] h-10 px-3 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                      <span className="text-orange-400 font-mono font-bold text-sm tracking-wide">
                        {p.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[10px] tracking-[0.2em] text-gray-500 font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-gray-200 text-[14px] leading-snug">{p.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Справа — фото трубки */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[320px]">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/15 via-transparent to-transparent blur-2xl" />
                <div
                  className="relative h-full overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
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
                    src={tubeImages.stdAngle01}
                    alt="Пример трубной изоляции"
                    className="absolute inset-0 w-full h-full object-contain p-8"
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

                  {/* Бейдж */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-sm border border-orange-500/40 bg-[#0a0a0a]/70 backdrop-blur-sm">
                    <Icon name="Tag" size={12} className="text-orange-400" />
                    <span className="text-[10px] tracking-[0.2em] text-orange-300 font-semibold">
                      МАРКИРОВКА
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Размеры ── */}
      <section className="relative border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="t-label text-orange-400/90 tracking-[0.18em]">РАЗМЕРЫ</span>
          </div>
          <h2 className="t-h2 text-white mb-12 max-w-3xl">
            Размеры <span className="text-orange-500">изоляционных трубок</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {SIZES.map((s, i) => {
              const span =
                i === 0
                  ? "lg:col-span-4"
                  : i === 1
                  ? "lg:col-span-5"
                  : "lg:col-span-3";
              const grid =
                s.columns === 2
                  ? "grid-cols-2"
                  : s.columns === 3
                  ? "grid-cols-3"
                  : "grid-cols-3 sm:grid-cols-5";
              return (
                <div
                  key={s.title}
                  className={`group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-7 transition-all duration-300 hover:border-orange-500/50 ${span}`}
                >
                  <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center">
                        <Icon name={s.icon} size={18} className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.22em] text-orange-500/70 font-semibold">
                          0{i + 1}
                        </div>
                        <div className="text-white text-base sm:text-lg font-semibold leading-tight">
                          {s.title}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">
                      {s.unit}
                    </span>
                  </div>

                  <div className={`grid ${grid} gap-2`}>
                    {s.values.map((v) => (
                      <div
                        key={v}
                        className="text-center py-2.5 rounded-sm bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.05] transition-colors"
                      >
                        <span className="text-white font-mono text-[14px] sm:text-[15px] tracking-wide">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between text-[11px] tracking-[0.18em] text-gray-500 uppercase">
                    <span>Всего значений</span>
                    <span className="text-orange-400 font-semibold">{s.values.length}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrubnayaIzolyaciya;