import { useState } from "react";
import Icon from "@/components/ui/icon";
import { GRAD } from "@/pages/t1/data";
import { sendRequest } from "@/lib/sendRequest";
import { toast } from "sonner";

const inputCls =
  "w-full bg-[#0f0f10] border border-white/10 rounded-sm px-4 py-3.5 outline-none text-[14px] font-medium text-white placeholder-gray-600 transition-all duration-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500";

const labelCls = "block text-[11px] tracking-[0.18em] text-gray-500 uppercase mb-2";

const ADVANTAGES = [
  {
    title: "Подбор вида материала",
    text: "Цилиндры, лёгкие, ламельные или прошивные маты под геометрию объекта.",
  },
  {
    title: "Расчёт параметров",
    text: "Подбор толщины, плотности и температурного исполнения.",
  },
  {
    title: "Комплектация объекта",
    text: "Формирование состава поставки с учётом размеров и наружного покрытия.",
  },
];

export const RequestSection = () => {
  const [data, setData] = useState({ name: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Левая колонка — текст, преимущества, контакты */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="cat-label text-orange-400/90">ЗАПРОС РАСЧЁТА</span>
            </div>
            <h2 className="cat-h2 text-white mb-6 max-w-3xl">
              Подбор технической изоляции{" "}
              <span className="text-orange-500">из каменной ваты</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-[1.7] mb-4">
              Для подбора материала передайте параметры объекта: тип изолируемой поверхности,
              диаметр или размеры конструкции, рабочую температуру, требуемую толщину изоляции,
              условия эксплуатации и требования к наружному покрытию.
            </p>
            <p className="text-gray-400 text-[15px] leading-[1.7] mb-10">
              По этим данным подбирается форма материала, плотность, тип исполнения,
              производитель и подходящий типоразмер.
            </p>

            {/* Преимущества */}
            <ul className="space-y-4 mb-10">
              {ADVANTAGES.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #e63012, #f97316)" }}
                  >
                    <Icon name="Check" size={11} className="text-white" />
                  </span>
                  <div>
                    <div className="text-white text-[14px] font-semibold leading-snug">
                      {a.title}
                    </div>
                    <div className="text-gray-400 text-[13px] leading-snug mt-0.5">{a.text}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Контакты */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+78126426742"
                className="group flex items-center gap-3 p-4 rounded-sm border border-white/10 bg-white/[0.025] hover:border-orange-500/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={16} className="text-orange-400" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.18em] text-gray-500 uppercase">
                    Телефон
                  </div>
                  <div className="text-white font-semibold text-[15px] mt-0.5 group-hover:text-orange-400 transition-colors">
                    +7 812 642 67 42
                  </div>
                </div>
              </a>
              <a
                href="mailto:t1izol@mail.ru"
                className="group flex items-center gap-3 p-4 rounded-sm border border-white/10 bg-white/[0.025] hover:border-orange-500/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-sm border border-orange-500/30 bg-orange-500/5 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={16} className="text-orange-400" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.18em] text-gray-500 uppercase">Почта</div>
                  <div className="text-white font-semibold text-[15px] mt-0.5 group-hover:text-orange-400 transition-colors break-all">
                    t1izol@mail.ru
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Правая колонка — стандартная форма */}
          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-10"
              style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.8)" }}
            >
              <div className="absolute top-0 left-0 h-[3px] w-24" style={{ background: GRAD }} />

              <div className="flex items-center gap-3 mb-2">
                <Icon name="FileText" size={18} className="text-orange-400" />
                <h3
                  className="text-white text-xl sm:text-2xl font-bold"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Передать параметры объекта
                </h3>
              </div>
              <p className="text-gray-500 text-[13px] mb-8">
                Технический специалист свяжется в течение 1 рабочего дня.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-sm flex items-center justify-center mb-6"
                    style={{ background: GRAD }}
                  >
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h4
                    className="text-white text-xl mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    Запрос отправлен
                  </h4>
                  <p className="text-gray-400 text-[14px]">
                    Технический специалист свяжется с вами в ближайшее рабочее время.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    try {
                      await sendRequest({ ...data, source: "Каменная вата (ПГС)" });
                      setSubmitted(true);
                    } catch {
                      toast.error("Не удалось отправить заявку. Попробуйте позвонить нам.");
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Имя *</label>
                      <input
                        type="text"
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        placeholder="Иван Петров"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Телефон *</label>
                      <input
                        type="tel"
                        required
                        value={data.phone}
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Компания</label>
                    <input
                      type="text"
                      value={data.company}
                      onChange={(e) => setData({ ...data, company: e.target.value })}
                      placeholder="ООО «Название»"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Комментарий / параметры объекта</label>
                    <textarea
                      value={data.message}
                      onChange={(e) => setData({ ...data, message: e.target.value })}
                      placeholder="Тип поверхности, размеры, температура, требуемая толщина, условия эксплуатации..."
                      rows={4}
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full text-white py-4 font-bold uppercase tracking-widest text-[12px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2.5 rounded-sm disabled:opacity-60"
                    style={{ background: GRAD }}
                  >
                    {loading ? "Отправка..." : "Отправить запрос"}
                    <Icon
                      name="ArrowRight"
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                  <p className="text-gray-500 text-[12px] text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a
                      href="#privacy"
                      className="underline hover:text-orange-400 transition-colors"
                    >
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;