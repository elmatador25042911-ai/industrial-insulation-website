import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import InternalLayout from "@/components/layouts/InternalLayout";

type Section = {
  id: string;
  num: string;
  title: string;
};

const SECTIONS: Section[] = [
  { id: "policy", num: "01", title: "Политика конфиденциальности" },
  { id: "agreement", num: "02", title: "Согласие на обработку персональных данных" },
];

const PolitikaKonfidencialnosti = () => {
  return (
    <InternalLayout>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[160px]" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-orange-500" />
              <span className="cat-label text-orange-400/90">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</span>
            </div>
            <h1
              className="text-white text-[32px] sm:text-[44px] leading-[1.05]"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em" }}
            >
              Политики и положения
            </h1>
            <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-5 max-w-2xl">
              Документы, регулирующие обработку персональных данных на сайте t1izol.ru
            </p>
          </div>
        </section>

        {/* Содержание */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="rounded-sm border border-white/10 bg-gradient-to-br from-[#141416] to-[#0c0c0e] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="List" size={18} className="text-orange-400" />
              <h2
                className="text-white text-[18px]"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em" }}
              >
                Содержание
              </h2>
            </div>
            <ol className="space-y-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    <span
                      className="text-[13px] text-orange-500/80 w-7 flex-shrink-0"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {s.num}
                    </span>
                    <span className="text-[15px] leading-snug">{s.title}</span>
                    <span className="ml-auto w-0 h-px bg-orange-500 group-hover:w-5 transition-all duration-300 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Документы */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
          {/* Политика конфиденциальности */}
          <article id="policy" className="scroll-mt-28">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <span className="w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={20} className="text-orange-400" />
              </span>
              <div>
                <div
                  className="text-orange-400/80 text-[12px] tracking-[0.15em] mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  РАЗДЕЛ 01
                </div>
                <h2
                  className="text-white text-[24px] sm:text-[28px] leading-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: "uppercase" }}
                >
                  Политика конфиденциальности
                </h2>
              </div>
            </div>
            <div className="doc-body space-y-4 text-gray-400 text-[15px] leading-[1.8]">
              <p>Текст «Политики конфиденциальности» будет размещён здесь.</p>
            </div>
          </article>

          {/* Согласие на обработку персональных данных */}
          <article id="agreement" className="scroll-mt-28">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <span className="w-11 h-11 rounded-sm border border-orange-500/40 bg-orange-500/[0.08] flex items-center justify-center flex-shrink-0">
                <Icon name="FileCheck" size={20} className="text-orange-400" />
              </span>
              <div>
                <div
                  className="text-orange-400/80 text-[12px] tracking-[0.15em] mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  РАЗДЕЛ 02
                </div>
                <h2
                  className="text-white text-[24px] sm:text-[28px] leading-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: "uppercase" }}
                >
                  Согласие на обработку персональных данных
                </h2>
              </div>
            </div>
            <div className="doc-body space-y-4 text-gray-400 text-[15px] leading-[1.8]">
              <p>Текст «Согласия на обработку персональных данных» будет размещён здесь.</p>
            </div>
          </article>

          {/* Наверх */}
          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-400 text-[13px] transition-colors"
            >
              <Icon name="ArrowUp" size={14} />
              Наверх, к содержанию
            </a>
          </div>
        </section>
      </main>
    </InternalLayout>
  );
};

export default PolitikaKonfidencialnosti;
