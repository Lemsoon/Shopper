import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Outlet />
      <Footer />
    </div>
  );
}
