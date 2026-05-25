import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import InternalLayout from "@/components/layouts/InternalLayout";

const ZashchitnyePokrytiya = () => {
  return (
    <InternalLayout>
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[160px]" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 min-h-[70vh] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="h-px w-10 bg-orange-500 flex-shrink-0" />
              <span className="t-label text-orange-400/90 tracking-[0.18em] leading-relaxed">
                КАТАЛОГ / СУДОСТРОЕНИЕ / ЗАЩИТНЫЕ ПОКРЫТИЯ
              </span>
            </div>

            <h1
              className="text-white leading-[0.95] max-w-4xl"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Защитные покрытия
              <br />
              <span className="text-orange-500">для судостроения</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-7 mb-10">
              Страница в разработке.
            </p>

            <div>
              <Link
                to="/#catalog-sudostroenie"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-orange-500 hover:text-orange-400 text-white font-semibold tracking-wide transition-colors rounded-sm"
              >
                <Icon name="ArrowLeft" size={18} />
                Вернуться в каталог
              </Link>
            </div>
          </div>
        </section>
      </main>
    </InternalLayout>
  );
};

export default ZashchitnyePokrytiya;
