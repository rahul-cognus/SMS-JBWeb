import SiteHeader from "@/components/SiteHeader";
import React, { ReactNode } from "react";

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
}

export default FrontLayout;
