import Navbar from "@/components/shared/main/Navbar";
import Footer from "@/components/shared/main/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
