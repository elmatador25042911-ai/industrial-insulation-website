import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { IMG_BOILER, IMG_PIPE, IMG_SHIP, IMG_HERO, GRAD, INDUSTRIES, CERTIFICATES, PROCESS, useVisible, useLoopVideo } from "./data";

/* ─── Industries ─────────────────────────────────────────────── */
export const IndustriesSection = () => {
  const indVis = useVisible(0.1);
  return (
    <section id="industries" className="section-pad bg-gray-950 overflow-hidden noise-bg relative" ref={indVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_SHIP} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-14 transition-all duration-700 ${indVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Отрасли применения</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-orange-400">
            Работаем в каждой<br />промышленной отрасли
          </h2>
          <div className="t-underline mx-auto justify-center" />
          <p className="t-body max-w-sm mx-auto mt-4 !text-white">Опыт поставок на объекты — от районной котельной до нефтеперерабатывающих заводов  и судостроительных верфей</p>
        </div>

        {/* Сетка отраслей — 4 + 3, вертикальные плитки */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-5">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-gray-900/60 to-gray-950 cursor-default transition-all duration-500 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_24px_60px_-12px_rgba(249,115,22,0.25)]
                ${i < 4 ? "lg:col-span-3" : "lg:col-span-4"}
                ${indVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}
            >
              {/* Верх — фото (вертикальное, постоянно видимое) */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={ind.img}
                  alt={ind.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.07]"
                />
                {/* Деликатное затемнение снизу для перехода к тексту */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                {/* Тонкое осветление сверху при hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 transition-all duration-500" />
                {/* Иконка-бейдж */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl border border-white/15 bg-gray-950/50 backdrop-blur-md flex items-center justify-center group-hover:border-orange-500/60 group-hover:bg-orange-500 transition-all duration-300">
                  <Icon name={ind.icon} size={18} className="text-orange-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Низ — текст */}
              <div className="relative flex flex-col flex-1 px-4 pt-4 pb-5 -mt-px">
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-orange-500/50 via-orange-500/15 to-transparent" />
                <h3 className="text-white font-bold text-[15px] sm:text-[16px] leading-snug mb-1.5" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}>{ind.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 text-[12px] sm:text-[12.5px] leading-relaxed transition-colors duration-300">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ─── Certificates ───────────────────────────────────────────── */
export const CertificatesSection = () => {
  const certVis = useVisible(0.1);
  const certVideoRef = useLoopVideo();
  return (
    <section id="certificates" className="section-pad overflow-hidden relative bg-[#0a0a0a]" ref={certVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={certVideoRef}
          autoPlay muted loop playsInline preload="auto"
          className="w-full h-full object-cover bg-black"
          style={{ willChange: "transform", objectPosition: "center", transform: "scale(1)" }}
          src="https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/documentation-video.mp4?v=3"
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/55 via-[#0a0a0a]/45 to-[#0a0a0a]/65" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-16 transition-all duration-700 ${certVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Документация</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-white">
            Сертификаты, лицензии<br />и соответствие стандартам
          </h2>
          <div className="t-underline mx-auto justify-center" />
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-[136px] auto-rows-fr">
          {CERTIFICATES.map((cert, i) => {
            const Card = cert.link ? Link : "div";
            return (
            <Card
              key={cert.title}
              {...(cert.link ? { to: cert.link } : {})}
              className={`group relative overflow-hidden border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col h-full min-h-[200px] ${cert.link ? "cursor-pointer" : ""}
                ${certVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}
              style={{
                background: "linear-gradient(145deg, rgba(20,20,20,0.85) 0%, rgba(10,10,10,0.92) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Линия сверху */}
              <div className="absolute top-0 left-0 w-0 h-[2px] rounded-full group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #e63012, #f97316, #fbbf24)" }} />

              {/* Угловой акцент */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }} />

              <div className="relative flex items-start justify-between gap-3 mb-5">
                <div className="w-11 h-11 shrink-0 rounded-xl border border-orange-500/25 bg-orange-500/[0.08] group-hover:bg-orange-500 group-hover:border-orange-500 flex items-center justify-center transition-all duration-300">
                  <div className="relative w-[18px] h-[18px]">
                    <Icon name={cert.icon} fallback="Award" size={18} className="text-orange-400 group-hover:text-white transition-colors duration-300" style={cert.iconRotate ? { transform: `rotate(${cert.iconRotate}deg)` } : undefined} strokeWidth={1.5} />
                    {cert.iconStrike && (
                      <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-orange-400 group-hover:text-white transition-colors duration-300 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                        <line x1="4" y1="20" x2="20" y2="4" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="t-label text-orange-400/80 bg-orange-500/[0.08] border border-orange-500/15 group-hover:border-orange-500/40 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-300">
                  {cert.category}
                </span>
              </div>

              <h3 className="relative font-bold text-[16px] text-white mb-2 leading-snug" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}>
                {cert.title}
              </h3>
              <p className="relative t-body text-[13px] leading-snug transition-colors duration-300 group-hover:!text-white" style={{ color: "#94a3b8" }}>{cert.desc}</p>
            </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

/* ─── Process ────────────────────────────────────────────────── */
export const ProcessSection = () => {
  const procVis = useVisible(0.1);
  return (
    <section id="process" className="section-pad bg-[#0a0a0a] overflow-hidden noise-bg relative" ref={procVis.ref}>
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMG_PIPE} alt="" aria-hidden className="w-full h-full object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Шапка */}
        <div className={`text-center mb-16 transition-all duration-700 ${procVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-500">Как мы работаем</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="t-h2 text-orange-400">
            5 этапов — от заявки до гарантии
          </h2>
          <div className="t-underline mx-auto justify-center" />
        </div>

        {/* Шаги */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {PROCESS.map((step, i) => (
            <div
              key={step.num}
              className={`group relative bg-[#0f0f0f] p-8 hover:bg-[#141414] transition-all duration-300
                ${procVis.visible ? `animate-fadeInUp delay-${(i + 1) * 100}` : "opacity-0"}`}
            >
              {/* Линия сверху на hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(90deg, #e63012, #f97316)" }} />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl border border-orange-500/25 group-hover:border-orange-500/60 flex items-center justify-center transition-all duration-300">
                  <span className="text-orange-500 font-black text-[13px]" style={{ fontFamily: "'Oswald', sans-serif" }}>{step.num}</span>
                </div>
                <Icon name={step.icon} size={15} className="text-gray-700 group-hover:text-orange-400 transition-colors duration-300" />
              </div>

              <h3 className="t-h3 text-white mb-3">{step.title}</h3>
              <p className="t-body text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-[14px]">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};