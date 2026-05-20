import type { ReactNode } from "react";
import SiteHeaderInternal from "@/pages/t1/SiteHeaderInternal";

const InternalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SiteHeaderInternal />
      {children}
    </>
  );
};

export default InternalLayout;
