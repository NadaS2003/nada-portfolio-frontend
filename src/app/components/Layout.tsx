import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}