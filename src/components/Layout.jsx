import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
