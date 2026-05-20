export const getCatalogReturnPath = (pathname: string): string => {
  if (pathname.startsWith("/catalog/sudostroenie")) return "/#catalog-sudostroenie";
  if (pathname.startsWith("/catalog/pgs")) return "/#catalog-pgs";
  return "/#catalog";
};
