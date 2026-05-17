import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { tubeImages } from "@/assets/trubnaya-izolyaciya/assets";

const BADGES = [
  { icon: "Thermometer", text: "от −200 до +110 °C" },
  { icon: "Flame", text: "Г1 / В1" },
  { icon: "Droplets", text: "μ ≥ 10 000" },
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
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent blur-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#161616] to-[#0d0d0d]">
                  <img
                    src={tubeImages.allTypesAngle}
                    alt="Трубная изоляция — все типы трубок"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
                  {/* Уголки */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-orange-500" />
                </div>

                {/* Подпись под фото */}
                <div className="mt-4 flex items-center justify-between text-[12px] tracking-[0.18em] text-gray-500 uppercase">
                  <span>T1 · Trubnaya Izolyaciya</span>
                  <span className="text-orange-500/80">01 / 23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrubnayaIzolyaciya;
