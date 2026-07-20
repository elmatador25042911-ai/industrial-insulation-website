import type { ReactNode } from "react";
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

/* ─── Типографика документа ──────────────────────────────────── */
const H3 = ({ children }: { children: ReactNode }) => (
  <h3
    className="text-white text-[17px] sm:text-[18px] mt-8 mb-3 leading-snug"
    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: "0.01em" }}
  >
    {children}
  </h3>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-400 text-[15px] leading-[1.8]">{children}</p>
);

const UL = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-2 mt-1">
    {items.map((it, i) => (
      <li key={i} className="flex gap-3 text-gray-400 text-[15px] leading-[1.7]">
        <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-orange-500/70 flex-shrink-0" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

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
            <div className="doc-body space-y-4">
              <p className="text-gray-500 text-[14px] italic">Положение об обработке персональных данных</p>

              <H3>1. Общие положения</H3>
              <P>
                1.1. Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты
                персональных данных пользователей сайта{" "}
                <a href="https://t1izol.ru/" className="text-orange-400 hover:text-orange-300 transition-colors">
                  https://t1izol.ru/
                </a>{" "}
                (далее — Сайт).
              </P>
              <P>
                1.2. Оператором персональных данных является Общество с ограниченной ответственностью «Т1 ИЗОЛЯЦИЯ»
                (ООО «Т1 ИЗОЛЯЦИЯ»), ИНН 7810939850, ОГРН 1227800017389, юридический адрес: 196105,
                г. Санкт-Петербург, ул. Решетникова, д. 13, литера А, помещ. 24-Н (далее — Оператор).
              </P>
              <P>
                1.3. Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
                «О персональных данных».
              </P>
              <P>
                1.4. Используя Сайт и направляя заявки через формы обратной связи, пользователь подтверждает согласие
                с условиями настоящей Политики.
              </P>

              <H3>2. Какие персональные данные обрабатываются</H3>
              <P>2.1. Оператор может обрабатывать следующие персональные данные:</P>
              <UL
                items={[
                  "имя;",
                  "номер телефона;",
                  "название компании / организации;",
                  "текст сообщения / комментария;",
                  "IP-адрес, данные cookies, информация о браузере и устройстве (собираются автоматически).",
                ]}
              />

              <H3>3. Цели обработки персональных данных</H3>
              <P>3.1. Персональные данные обрабатываются в следующих целях:</P>
              <UL
                items={[
                  "обработка заявок и обратная связь с пользователем;",
                  "подготовка коммерческих предложений и расчётов;",
                  "консультирование по продукции и услугам;",
                  "заключение и исполнение договоров;",
                  "улучшение работы Сайта и анализ его посещаемости.",
                ]}
              />

              <H3>4. Правовые основания обработки</H3>
              <P>4.1. Обработка персональных данных осуществляется на основании:</P>
              <UL
                items={[
                  "согласия субъекта персональных данных;",
                  "необходимости исполнения договора или принятия мер до заключения договора;",
                  "требований законодательства Российской Федерации.",
                ]}
              />

              <H3>5. Срок обработки и хранения данных</H3>
              <P>
                5.1. Персональные данные обрабатываются и хранятся до достижения целей обработки либо до момента отзыва
                согласия субъектом персональных данных, если иное не предусмотрено законодательством.
              </P>
              <P>
                5.2. Данные, входящие в состав бухгалтерской и иной обязательной документации, хранятся в течение
                сроков, установленных законодательством.
              </P>

              <H3>6. Передача персональных данных третьим лицам</H3>
              <P>6.1. Оператор не передаёт персональные данные третьим лицам, за исключением случаев:</P>
              <UL
                items={[
                  "когда это необходимо для исполнения обязательств перед пользователем;",
                  "когда передача требуется по законодательству Российской Федерации;",
                  "когда пользователь дал на это отдельное согласие.",
                ]}
              />

              <H3>7. Меры по защите персональных данных</H3>
              <P>
                7.1. Оператор принимает необходимые организационные и технические меры для защиты персональных данных
                от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования,
                распространения, а также от иных неправомерных действий.
              </P>

              <H3>8. Права субъекта персональных данных</H3>
              <P>8.1. Субъект персональных данных имеет право:</P>
              <UL
                items={[
                  "получать информацию об обработке своих персональных данных;",
                  "требовать уточнения, блокирования или уничтожения персональных данных;",
                  "отозвать согласие на обработку персональных данных;",
                  "обжаловать действия или бездействие Оператора в Роскомнадзор или в судебном порядке.",
                ]}
              />
              <P>
                8.2. Для реализации своих прав субъект персональных данных может направить обращение:
              </P>
              <UL
                items={[
                  <>
                    по электронной почте:{" "}
                    <a href="mailto:t1izol@mail.ru" className="text-orange-400 hover:text-orange-300 transition-colors">
                      t1izol@mail.ru
                    </a>
                  </>,
                  <>
                    по телефону:{" "}
                    <a href="tel:+78126426742" className="text-orange-400 hover:text-orange-300 transition-colors">
                      +7 (812) 642-67-42
                    </a>
                  </>,
                ]}
              />

              <H3>9. Использование файлов cookie</H3>
              <P>
                9.1. Сайт может использовать файлы cookie и аналогичные технологии для обеспечения корректной работы
                Сайта, улучшения пользовательского опыта и анализа посещаемости. Пользователь может ограничить или
                отключить использование cookie в настройках своего браузера.
              </P>

              <H3>10. Изменение Политики</H3>
              <P>
                10.1. Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда размещается на
                Сайте по адресу:{" "}
                <a
                  href="https://t1izol.ru/politika-konfidencialnosti"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  https://t1izol.ru/politika-konfidencialnosti
                </a>
              </P>

              <H3>11. Контактная информация</H3>
              <P>
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:
              </P>
              <div className="mt-2 rounded-sm border border-white/10 bg-white/[0.02] p-5 space-y-1.5 text-[15px] leading-[1.7]">
                <p className="text-white font-medium">ООО «Т1 ИЗОЛЯЦИЯ»</p>
                <p className="text-gray-400">
                  Телефон:{" "}
                  <a href="tel:+78126426742" className="text-orange-400 hover:text-orange-300 transition-colors">
                    +7 (812) 642-67-42
                  </a>
                </p>
                <p className="text-gray-400">
                  E-mail:{" "}
                  <a href="mailto:t1izol@mail.ru" className="text-orange-400 hover:text-orange-300 transition-colors">
                    t1izol@mail.ru
                  </a>
                </p>
                <p className="text-gray-400">
                  Адрес: 196105, г. Санкт-Петербург, ул. Решетникова, д. 13, литера А, помещ. 24-Н
                </p>
              </div>
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