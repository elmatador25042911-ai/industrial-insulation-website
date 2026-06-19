import { useRef, useState, useEffect } from "react";

export const LOGO_IMG = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/bucket/45df6c21-6239-4f1c-8904-6639b775df22.png";
export const LOGO_SYMBOL = "https://cdn.poehali.dev/files/53d29d32-74f0-4088-9d14-8c8b870bf4a3.png";

export const IMG_HERO   = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/13ad7087-45ba-4c45-a9d9-f6fac5286d8d.jpg";
export const IMG_BOILER = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/b4f523ee-7f73-4d6e-a86b-a0a81dd4b98b.jpg";
export const IMG_SHIP   = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/e61d4de9-bcc7-4f47-b8a7-0687a3bf4b9e.jpg";
export const IMG_PIPE   = "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/6a3cb15e-2c7a-40d3-a075-c99e7ed457f2.jpg";

export const GRAD = "linear-gradient(135deg, #e63012 0%, #f97316 50%, #fbbf24 100%)";
export const GRAD_H = "linear-gradient(90deg, #e63012 0%, #f97316 50%, #fbbf24 100%)";

export const NAV_LINKS = [
  { label: "О нас",                href: "#about" },
  { label: "Каталоги",             href: "#catalog" },
  { label: "Отрасли применения",   href: "#industries" },
  { label: "Документация",         href: "#certificates" },
  { label: "Контакты",             href: "#contacts" },
];

export const STATS = [
  { num: "2022", label: "год основания" },
  { num: "B2B",  label: "работаем с организациями" },
];

export const SERVICES = [
  { icon: "Pipette", title: "Теплоизоляция трубопроводов",      kw: "изоляция трубопроводов",    desc: "Монтаж промышленной теплоизоляции на трубопроводы любого диаметра — от DN15 до DN1400. Работаем с паром, горячей водой, нефтепродуктами и агрессивными средами.",                                   tag: "Ключевая услуга" },

  { icon: "Settings", title: "Теплоизоляция оборудования",      kw: "теплоизоляция оборудования", desc: "Комплексная тепловая изоляция насосов, компрессоров, теплообменников, котлов и реакторов. Сокращаем тепловые потери до 95%.",                                                                       tag: "" },
  { icon: "Database", title: "Изоляция резервуаров",             kw: "",                           desc: "Утепление резервуаров РВС, РГС, ёмкостей для нефтепродуктов и химических веществ. Проектирование и монтаж в полном объёме.",                                                                       tag: "" },
  { icon: "Anchor",   title: "Судовая теплоизоляция",            kw: "судовая теплоизоляция",      desc: "Специализированная изоляция корпусов судов, машинных отделений и трубопроводов. Соответствие Регистру РФ и международным стандартам.",                                                              tag: "Специализация" },
  { icon: "Wind",     title: "Изоляция вентиляции",              kw: "",                           desc: "Теплоизоляция и шумоподавление вентиляционных каналов, воздуховодов промышленных объектов и судов.",                                                                                                 tag: "" },
  { icon: "Shield",   title: "Монтаж кожухов",                   kw: "",                           desc: "Изготовление и монтаж защитных металлических кожухов из оцинкованной стали и алюминия. Долговечная защита изоляции.",                                                                               tag: "" },
  { icon: "Flame",    title: "Огнезащита",                       kw: "",                           desc: "Огнезащитная обработка металлоконструкций, кабелей и инженерных систем. Сертифицированные материалы и бригады.",                                                                                    tag: "" },
  { icon: "Wrench",   title: "Комплексный монтаж теплоизоляции", kw: "монтаж теплоизоляции",       desc: "Полный цикл: проектирование, поставка материалов, монтаж, сдача объекта с документацией. Один подрядчик — ноль лишних согласований.",                                                               tag: "Популярно" },
];

export const WHY_US = [
  { icon: "Users",    title: "200+ аттестованных специалистов",  desc: "Монтажники, инженеры и технадзор — весь штат в штате. Без субподряда на ключевых работах." },
  { icon: "Clock",    title: "Сдача объектов в срок — 98%",      desc: "Строгий производственный контроль и запас бригад для соблюдения дедлайна на любом объекте." },
  { icon: "BookOpen", title: "Работа строго по ГОСТ и СНиП",     desc: "Все технические решения проходят нормоконтроль. Документация готова к проверке любым надзором." },
  { icon: "Package",  title: "Материалы ведущих производителей", desc: "Rockwool, Knauf, Paroc, Изовер — прямые договоры. Оригинальные материалы с сертификатами." },
  { icon: "MapPin",   title: "85 регионов России",                desc: "Собственные бригады, доставка материалов и командировки по всей территории РФ." },
  { icon: "FileText", title: "Смета без скрытых платежей",       desc: "Фиксированная стоимость в договоре. Изменения — только по согласованию с заказчиком." },
];

export const INDUSTRIES = [
  { icon: "Anchor",    title: "Судостроение",              desc: "Верфи, доки, суда и корабли",                    img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/2ddcfe4f-787b-43d3-bbbd-516901336093.jpg" },
  { icon: "Ship",      title: "Порты и терминалы",        desc: "Перегрузочные комплексы",              img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/21169fd0-d63f-4a50-9c10-72ec8d9f748b.jpg" },
  { icon: "Droplets",  title: "Нефтегаз",                 desc: "НПЗ, магистральные трубопроводы",      img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/c97af338-e7c7-40ce-8d26-f531575d80b1.jpg" },
  { icon: "Building2", title: "Промышленные предприятия", desc: "Производственные объекты",             img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/452cbe0f-9751-4c8c-a3f5-ecbc70375385.jpg" },
  { icon: "Factory",   title: "Заводы и производства",    desc: "Химия, металлургия, пищепром, здравоохранение",         img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/a26260aa-38f9-4535-9d46-964e281ff2f2.jpg" },
  { icon: "Zap",       title: "Энергетика",               desc: "ТЭЦ, котельные, АЭС",                  img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/e8157ac5-5cf0-4f3d-b470-d139abe8ef7b.jpg" },
  { icon: "Home",      title: "ЖКХ",                      desc: "Тепловые сети, ЦТП, ИТП",                   img: "https://cdn.poehali.dev/projects/666206ac-09b6-496e-92d3-ecbea5df546a/files/3ac3e038-fef9-421c-9795-3997287c4165.jpg" },
];

export const PROCESS = [
  { num: "01", title: "Заявка",        desc: "Оставьте заявку или позвоните — мы ответим в течение 1 часа в рабочее время.", icon: "MessageSquare" },
  { num: "02", title: "Расчёт",        desc: "Выезжаем на объект, изучаем техзадание и готовим детальную смету.",            icon: "Calculator" },
  { num: "03", title: "Согласование",  desc: "Утверждаем стоимость, сроки и техническое решение. Подписываем договор.",      icon: "FileCheck" },
  { num: "04", title: "Выполнение",    desc: "Монтаж по утверждённому графику с еженедельной отчётностью для заказчика.",    icon: "HardHat" },
  { num: "05", title: "Сдача объекта", desc: "Передаём исполнительную документацию и акты. Выдаём гарантийный паспорт.",     icon: "CheckCircle" },
];

export const CERTIFICATES = [
  { icon: "Sword",       title: "Теплоизоляция на основе вспененного каучука",   desc: "Для инженерных систем и промышленного оборудования", category: "Изоляция", iconRotate: -15, link: "/documentation/teploizolyatsiya-kauchuk" },
  { icon: "Layers",      title: "Теплоизоляция из минеральной \"каменной\" ваты", desc: "Для высокотемпературных и промышленных объектов",    category: "Изоляция", link: "/documentation/teploizolyatsiya-kamennaya-vata" },
  { icon: "Shield",      title: "Защитные покрытия",                              desc: "Для защиты теплоизоляции и оборудования",            category: "Покрытия", link: "/documentation/zashchitnye-pokrytiya" },
  { icon: "ShieldCheck", title: "Защитные материалы",                             desc: "Материалы для промышленной изоляции и защиты",       category: "Материалы", link: "/documentation/zashchitnye-materialy" },
  { icon: "Package",     title: "Термочехлы",                                     desc: "Съёмные решения для оборудования и арматуры",        category: "Чехлы", link: "/documentation/termochekhly" },
  { icon: "Droplet",     title: "Антиконденсатные покрытия",                      desc: "Предотвращение образования конденсата",              category: "Покрытия", iconStrike: true },
  { icon: "Brush",       title: "Монтажные материалы / аксессуары",               desc: "Ленты, клеи, очистители и комплектующие",            category: "Аксессуары" },
  { icon: "AudioLines",  title: "Шумоизоляция",                                   desc: "Снижение шума инженерных и промышленных систем",     category: "Шум" },
  { icon: "Wrench",      title: "Опоры и подвесы",                                desc: "Элементы крепления трубопроводов и оборудования",    category: "Крепёж" },
];

export const CONTACTS_INFO = [
  { icon: "Phone",     label: "Телефон",         value: "+7 812 642 67 42",            sub: "Офис",                          href: "tel:+78126426742" },
  { icon: "Mail",      label: "Email",          value: "t1izol@mail.ru",        sub: "Ответим за 1 рабочий день",     href: "mailto:t1izol@mail.ru" },
  { icon: "MapPin",    label: "Адрес",          value: "196105, Санкт-Петербург",     sub: "ул. Решетникова, 13А",          href: "https://yandex.ru/maps/org/t1_izolyatsiya/83301899150/?ll=30.327649%2C59.878585&z=19" },
  { icon: "Clock",     label: "Режим работы",   value: "ПН–ПТ: 09:00–18:00",          sub: "СБ–ВС — по договорённости",    href: "#" },
];

/* ─── Intersection Observer Hook ────────────────────────────── */
export function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Loop Video Hook ────────────────────────────── */
export function useLoopVideo(playbackRate: number = 1) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    const applyRate = () => {
      try { v.playbackRate = playbackRate; } catch { /* noop */ }
    };
    const tryPlay = () => {
      applyRate();
      v.play().catch(() => {});
    };
    const onEnded = () => {
      v.currentTime = 0;
      applyRate();
      v.play().catch(() => {});
    };
    v.addEventListener("loadedmetadata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    v.addEventListener("ended", onEnded);
    applyRate();
    tryPlay();
    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("ended", onEnded);
    };
  }, [playbackRate]);
  return ref;
}