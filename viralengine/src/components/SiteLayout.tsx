import type { ReactNode } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
