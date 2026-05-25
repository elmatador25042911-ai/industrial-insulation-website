import type { ElementType } from "react";
import { Link } from "react-router-dom";
import { IMG_SHIP, IMG_BOILER, useVisible, useLoopVideo } from "./data";

const SHIPYARD_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/shipyard-video.mp4";
const PGS_VIDEO = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/videos/industrial-pgs-section-video.mp4";

const IMG_TUBES = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/3ddf0ad3-7940-400c-a688-3e907253b23d.jpg";
const IMG_ROLLS = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/51e58607-a24b-44da-948e-737b95e9c9e0.jpg";
const IMG_GLUE  = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/a8546888-733b-4725-826e-b8ddc828706d.jpg";

const CATALOG_SHIP: { name: string; sub: string; img: string; href?: string }[] = [
  { name: "Трубная изоляция",          sub: "Вспененный каучук для трубопроводов",    img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/trubnaya-sud.jpg", href: "/catalog/sudostroenie/trubnaya-izolyaciya" },
  { name: "Рулонная изоляция",         sub: "Вспененный каучук для поверхностей",     img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/rilonaya-sud.jpg", href: "/catalog/sudostroenie/rulonnaya-izolyaciya" },
  { name: "Монтажные материалы",       sub: "Ленты, клеи, очистители",               img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/montajniemateriali-sud.jpg" },
  { name: "Защитные покрытия",         sub: "Металл и полимерные решения",            img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/zaqshitnieporitiya-sud.jpg", href: "/catalog/sudostroenie/zashchitnye-pokrytiya" },
  { name: "Термочехлы",                sub: "Для оборудования и трубопроводов",       img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/termochehol-sud.jpg" },
  { name: "Антиконденсатные покрытия", sub: "Тепло- и влагозащита поверхностей",     img: "https://cdn.poehali.dev/files/fd19cb44-689d-42fb-a507-66e8b6bcbd0a.jpg" },
];

const CATALOG_INDUSTRY: { name: string; sub: string; img: string; href?: string }[] = [
  { name: "Трубная изоляция",          sub: "Вспененный каучук для трубопроводов",      img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/trubnaya-pgs.jpg", href: "/catalog/pgs/trubnaya-izolyaciya" },
  { name: "Рулонная изоляция",         sub: "Вспененный каучук для поверхностей",       img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/rilonaya-sud.jpg" },
  { name: "Монтажные материалы",       sub: "Ленты, клеи, очистители",                 img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/montajniemateriali-pgs.jpg" },
  { name: "Защитные материалы",         sub: "Металл и полимерные решения",              img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/zashitniemateriali-pgs.jpg" },
  { name: "Термочехлы",                sub: "Для оборудования и трубопроводов",         img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/termochehol-pgs.jpg" },
  { name: "Каменная вата",             sub: "Теплоизоляция для инженерных систем",      img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/vata-pgs.jpg" },
  { name: "Шумоизоляция",              sub: "Снижение шума оборудования и систем",      img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/shumoizol-pgs.png" },
  { name: "Опоры и подвесы",           sub: "Крепление трубопроводов и систем",         img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/catalog/podves-pgs.jpg" },
];

const CatalogCard = ({ name, sub, img, delay, visible, href }: {
  name: string; sub: string; img: string; delay: number; visible: boolean; href?: string;
}) => {
  const Wrapper: ElementType = href ? Link : "div";
  const wrapperProps = href ? { to: href } : {};
  return (
  <Wrapper
    {...wrapperProps}
    className={`group relative overflow-hidden ${href ? "cursor-pointer" : "cursor-default"} select-none w-full h-full block
      ${visible ? "animate-fadeInUp" : "opacity-0"}`}
    style={{
      animationDelay: `${delay}ms`,
      borderRadius: "18px",
      background: "linear-gradient(135deg, #141210 0%, #1c1814 60%, #1f1510 100%)",
      boxShadow: "0 4px 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.07)",
      transition: "box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease",
      willChange: "transform",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = "translateY(-3px) scale(1.02)";
      el.style.boxShadow = "0 10px 32px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)";
      el.style.borderColor = "rgba(230,48,18,0.22)";
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = "translateY(0) scale(1)";
      el.style.boxShadow = "0 4px 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)";
      el.style.borderColor = "rgba(255,255,255,0.07)";
    }}
  >
    {/* Фото — появляется при hover */}
    <img
      src={img}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[380ms] ease-out opacity-0 group-hover:opacity-100"
      style={{
        objectPosition: "center",
        filter: "brightness(1.02) contrast(1.05) saturate(1.03)",
        willChange: "opacity",
        backfaceVisibility: "hidden",
      }}
      loading="lazy"
      decoding="async"
    />

    {/* Базовый тёмный фон — скрывается при hover */}
    <div
      className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-[380ms] ease-out pointer-events-none"
      style={{ background: "linear-gradient(135deg, #141210 0%, #1c1814 60%, #1f1510 100%)" }}
    />
    {/* Overlay при hover — затемнение слева под текстом для читаемости */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[380ms] ease-out pointer-events-none"
      style={{ background: "linear-gradient(100deg, rgba(5,4,3,0.78) 0%, rgba(5,4,3,0.45) 45%, rgba(5,4,3,0.10) 75%, rgba(5,4,3,0) 100%)" }}
    />

    {/* Полоска слева */}
    <div
      className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-full transition-opacity duration-[380ms] opacity-35 group-hover:opacity-100"
      style={{ background: "linear-gradient(to bottom, #e63012, #f97316, #fbbf24)" }}
    />

    {/* Контент */}
    <div className="relative z-10 flex flex-col justify-center h-full px-7 sm:px-8 py-5">
      <p className="text-white font-bold text-[15.5px] leading-tight tracking-wide">
        {name}
      </p>
      <p className="text-gray-500 group-hover:text-gray-300 text-[12px] leading-snug mt-2.5 transition-colors duration-[380ms]">
        {sub}
      </p>
    </div>
  </Wrapper>
  );
};

export const CatalogSection = () => {
  const catalogVis = useVisible(0.1);
  const shipVideoRef = useLoopVideo();
  const pgsVideoRef = useLoopVideo(0.7);

  return (
    <section id="catalog" className="bg-[#f4f0eb] overflow-hidden relative" ref={catalogVis.ref}>

      {/* Заголовок раздела */}
      <div className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-orange-500/60" />
            <span className="t-label text-orange-600">Продукция</span>
            <div className="w-10 h-px bg-orange-500/60" />
          </div>
          <h2 className="text-orange-500" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.01em", textTransform: "uppercase" }}>
            Каталог изоляционных материалов
          </h2>
          <div className="t-underline mx-auto justify-center" />
        </div>
      </div>

      {/* ── Судостроение ── */}
      <div id="catalog-sudostroenie" className="relative min-h-[480px] scroll-mt-24">
        <div className="absolute inset-0 pointer-events-none">
          <video
            ref={shipVideoRef}
            autoPlay muted loop playsInline preload="auto"
            className="w-full h-full object-cover"
            style={{ willChange: "transform" }}
            poster={IMG_SHIP}
            src={SHIPYARD_VIDEO}
            disablePictureInPicture
            disableRemotePlayback
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-transparent to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Подзаголовок */}
          <div className={`flex items-center gap-5 mb-8 transition-all duration-700 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="t-h3 text-white whitespace-nowrap">Для судостроения</h3>
            <div className="flex-1 h-px bg-white/15" />
            <span className="t-label text-orange-400/70 whitespace-nowrap">{CATALOG_SHIP.length} позиций</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 auto-rows-[150px]">
            {CATALOG_SHIP.map((item, i) => (
              <CatalogCard key={item.name} name={item.name} sub={item.sub} img={item.img} delay={i * 55} visible={catalogVis.visible} href={item.href} />
            ))}
          </div>
        </div>
      </div>

      {/* Промежуток между каталогами */}
      <div className="h-12 bg-[#f4f0eb]" />

      {/* ── Промышленность и ПГС ── */}
      <div id="catalog-pgs" className="relative min-h-[480px] scroll-mt-24">
        <div className="absolute inset-0 pointer-events-none">
          <video
            ref={pgsVideoRef}
            autoPlay muted loop playsInline preload="auto"
            controls={false}
            className="w-full h-full object-cover"
            style={{ willChange: "transform" }}
            poster={IMG_BOILER}
            src={PGS_VIDEO}
            disablePictureInPicture
            disableRemotePlayback
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]/65" />
        </div>

        <div className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-5 mb-8 transition-all duration-700 delay-200 ${catalogVis.visible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h3 className="t-h3 text-white whitespace-nowrap">Для промышленности и ПГС</h3>
            <div className="flex-1 h-px bg-white/10" />
            <span className="t-label text-orange-500/55 whitespace-nowrap">{CATALOG_INDUSTRY.length} позиций</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[150px]">
            {CATALOG_INDUSTRY.map((item, i) => (
              <CatalogCard key={item.name} name={item.name} sub={item.sub} img={item.img} delay={i * 55} visible={catalogVis.visible} href={item.href} />
            ))}
          </div>
        </div>
      </div>

      <div className="h-12 bg-[#f4f0eb]" />

    </section>
  );
};