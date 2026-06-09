import Icon from "@/components/ui/icon";
import { tubeImages } from "@/assets/trubnaya-izolyaciya/assets";

const APPLICATIONS: { icon: string; title: string; text: string }[] = [
  {
    icon: "Flame",
    title: "Отопление и теплоснабжение",
    text: "Снижение теплопотерь на трубопроводах отопления, ИТП, ЦТП и инженерных магистралях.",
  },
  {
    icon: "Snowflake",
    title: "Холодоснабжение и кондиционирование",
    text: "Контроль образования конденсата на холодных трубопроводах и системах кондиционирования.",
  },
  {
    icon: "Wind",
    title: "Вентиляция и воздуховоды",
    text: "Изоляция участков вентиляционных систем, воздуховодов и вспомогательных коммуникаций.",
  },
  {
    icon: "Factory",
    title: "Промышленные трубопроводы",
    text: "Применение на технологических линиях, производственных участках и инженерных системах предприятий.",
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

export const ApplicationsSection = () => {
  return (
    <>
      {/* ── Применение ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[520px] h-[520px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ПРИМЕНЕНИЕ</span>
          </div>
          <h2 className="cat-h2 text-white mb-6 max-w-3xl">
            Области применения <span className="text-orange-500">на промышленных объектах</span>
          </h2>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed max-w-3xl mb-12">
            Трубная изоляция применяется для изоляции инженерных систем зданий и
            промышленных объектов: трубопроводов отопления, холодоснабжения, вентиляции,
            кондиционирования, водоснабжения и технологических линий.
          </p>

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
                Допускается применение во внутренних помещениях, на открытых площадках и на
                наружных участках трасс. Доступны исполнения{" "}
                <span className="text-white font-medium">с самоклеящимся слоем</span> для ускоренного монтажа.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Варианты покрытий ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/[0.05] blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-orange-500" />
            <span className="cat-label text-orange-400/90">ПОКРЫТИЯ</span>
          </div>
          <h2 className="cat-h2 text-white mb-12 max-w-3xl">
            Исполнения <span className="text-orange-500">покрытий</span>
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
    </>
  );
};

export default ApplicationsSection;