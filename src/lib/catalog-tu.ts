/**
 * Продуктовая логика каталога «Судостроение».
 *
 * В каталоге судостроения две независимые продуктовые линейки:
 *
 *  1) Union / Unionflex — собственное производство:
 *     - Трубная изоляция
 *     - Рулонная изоляция
 *     - Защитные покрытия
 *     - Монтажные материалы
 *     Для этих категорий действует единое ТУ:
 *     TU_SUDOSTROENIE_UNION
 *
 *  2) Акварос — отдельная линейка:
 *     - Термочехлы          → линейка съёмных теплоизоляционных чехлов ПАНЦИРЬ
 *     - Антиконденсатные покрытия → материалы ЗМ
 *     Бренд Union / Unionflex и ТУ Union на эти категории НЕ распространяются.
 *
 * Для каталога ПГС / промышленности используются другие ТУ —
 * они будут добавлены отдельно по мере появления страниц.
 */

/** Единое ТУ для продукции Union / Unionflex в каталоге «Судостроение». */
export const TU_SUDOSTROENIE_UNION = "ТУ 22.19.20-001-17563055-2020 изм. 4";

/**
 * Обратно совместимый алиас.
 * Раньше эта константа использовалась только для продукции Union / Unionflex
 * (трубная / рулонная изоляция, защитные покрытия, монтажные материалы),
 * поэтому продолжаем экспортировать её под прежним именем.
 */
export const TU_SUDOSTROENIE = TU_SUDOSTROENIE_UNION;

/**
 * ТУ для каталога ПГС / промышленности.
 * Точный номер ТУ пока не утверждён — используется временная заглушка.
 * Не выдумывать номер: заменить здесь, когда ТУ будет утверждён.
 */
export const TU_PGS = "ТУ уточняется";

/** Бренды продуктовых линеек каталога «Судостроение». */
export const BRAND_UNION = "Union / Unionflex";
export const BRAND_AKVAROS = "Акварос";

/** Категории каталога «Судостроение», относящиеся к Union / Unionflex. */
export const SUDOSTROENIE_UNION_CATEGORIES = [
  "Трубная изоляция",
  "Рулонная изоляция",
  "Защитные покрытия",
  "Монтажные материалы",
] as const;

/** Категории каталога «Судостроение», относящиеся к Акварос. */
export const SUDOSTROENIE_AKVAROS_CATEGORIES = [
  "Термочехлы",
  "Антиконденсатные покрытия",
] as const;

/** Продуктовые линейки внутри бренда Акварос. */
export const AKVAROS_LINES = {
  termochehly: {
    category: "Термочехлы",
    line: "ПАНЦИРЬ",
    description: "Линейка съёмных теплоизоляционных чехлов ПАНЦИРЬ.",
  },
  antikondensat: {
    category: "Антиконденсатные покрытия",
    line: "ЗМ",
    description: "Материалы ЗМ.",
  },
} as const;

type UnionCategory = (typeof SUDOSTROENIE_UNION_CATEGORIES)[number];
type AkvarosCategory = (typeof SUDOSTROENIE_AKVAROS_CATEGORIES)[number];
export type SudostroenieCategory = UnionCategory | AkvarosCategory;

/**
 * Возвращает бренд для категории каталога «Судостроение».
 * Для категорий Акварос возвращает "Акварос" — НЕ Union / Unionflex.
 */
export const getSudostroenieBrand = (
  category: SudostroenieCategory,
): typeof BRAND_UNION | typeof BRAND_AKVAROS => {
  if ((SUDOSTROENIE_AKVAROS_CATEGORIES as readonly string[]).includes(category)) {
    return BRAND_AKVAROS;
  }
  return BRAND_UNION;
};

/**
 * Возвращает ТУ Union только для категорий Union / Unionflex.
 * Для категорий Акварос возвращает null — ТУ Union на них НЕ распространяется.
 */
export const getSudostroenieTU = (
  category: SudostroenieCategory,
): string | null => {
  if ((SUDOSTROENIE_AKVAROS_CATEGORIES as readonly string[]).includes(category)) {
    return null;
  }
  return TU_SUDOSTROENIE_UNION;
};