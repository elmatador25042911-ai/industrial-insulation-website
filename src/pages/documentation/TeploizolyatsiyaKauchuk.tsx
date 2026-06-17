import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import InternalLayout from "@/components/layouts/InternalLayout";

const CDN =
  "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/kauchuk-docs";

type Doc = { file: string; title: string };

const DOCS: Doc[] = [
  { file: "01-vypiska-iz-reestra-sertifikatov.jpg", title: "Выписка из реестра сертификатов" },
  { file: "02-sertifikat-sistemy-menedzhmenta-kachestva.jpg", title: "Сертификат системы менеджмента качества" },
  { file: "03-sertifikat-pozharnoy-bezopasnosti.jpg", title: "Сертификат пожарной безопасности" },
  { file: "04-sertifikat-dobrovolnoy-sertifikatsii.jpg", title: "Сертификат добровольной сертификации" },
  { file: "05-podtverzhdenie-sootvetstviya-pozharnoy-bezopasnosti.jpg", title: "Подтверждение соответствия пожарной безопасности" },
  { file: "06-razreshenie-na-znak-sootvetstviya.jpg", title: "Разрешение на знак соответствия" },
  { file: "07-sertifikat-apb-pozharnoy-bezopasnosti.jpg", title: "Сертификат АПБ пожарной безопасности" },
  { file: "08-ekspertnoe-zaklyuchenie.jpg", title: "Экспертное заключение" },
];

const TeploizolyatsiyaKauchuk = () => {
  const [active, setActive] = useState<Doc | null>(null);

  return (
    <InternalLayout>
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
            {/* Хлебная крошка */}
            <nav className="flex items-center gap-2 mb-8 flex-wrap text-[13px] text-gray-400">
              <Link to="/" className="hover:text-orange-400 transition-colors">
                Главная
              </Link>
              <Icon name="ChevronRight" size={14} className="text-gray-600" />
              <span className="text-gray-400">Документация</span>
              <Icon name="ChevronRight" size={14} className="text-gray-600" />
              <span className="text-white">
                Теплоизоляция на основе вспененного каучука
              </span>
            </nav>

            {/* Заголовок */}
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="cat-label text-orange-400/90">ДОКУМЕНТАЦИЯ</span>
            </div>
            <h1 className="cat-h1 text-white">
              Теплоизоляция на основе{" "}
              <span className="text-orange-500">вспененного каучука</span>
            </h1>

            {/* Сетка карточек: 2 в ряд */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {DOCS.map((doc) => (
                <article
                  key={doc.file}
                  className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-gradient-to-br from-[#141416] to-[#0c0c0e] transition-all duration-300 hover:border-orange-500/30 hover:-translate-y-1"
                  style={{ boxShadow: "0 18px 50px -20px rgba(0,0,0,0.7)" }}
                >
                  <div className="absolute top-0 left-0 h-[2px] w-12 bg-orange-500 z-10 transition-all duration-300 group-hover:w-full group-hover:opacity-60" />

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0f0f10] flex items-center justify-center">
                    <img
                      src={`${CDN}/${doc.file}`}
                      alt={doc.title}
                      loading="lazy"
                      className="w-[78%] h-[78%] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-3 text-center">
                    <h3
                      className="text-white text-[18px] sm:text-[20px] leading-[1.2] mb-5"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {doc.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActive(doc)}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide rounded-sm transition-colors text-[14px]"
                    >
                      <Icon name="Eye" size={16} />
                      Смотреть
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Модальное окно просмотра */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-sm border border-white/10 bg-[#0c0c0e] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 40px 100px -20px rgba(0,0,0,0.9)" }}
          >
            <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-white/10">
              <h3
                className="text-white text-[15px] sm:text-[17px] leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
              >
                {active.title}
              </h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Закрыть"
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40 transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="overflow-auto p-4 sm:p-6 bg-[#0f0f10]">
              <img
                src={`${CDN}/${active.file}`}
                alt={active.title}
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      )}
    </InternalLayout>
  );
};

export default TeploizolyatsiyaKauchuk;