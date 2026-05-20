import type { ReactNode } from "react";
import SiteHeaderInternal from "@/pages/t1/SiteHeaderInternal";
import { SiteFooter } from "@/pages/t1/SiteConversions";

const InternalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SiteHeaderInternal />
      {children}
      <SiteFooter />
    </>
  );
};

export default InternalLayout;
