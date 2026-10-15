import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <main className="pt-[25px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
