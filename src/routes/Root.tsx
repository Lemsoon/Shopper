import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StartPage } from "./StartPage";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
