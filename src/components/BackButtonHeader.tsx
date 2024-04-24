import { ReactNode } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

type headerProp = {
  children: ReactNode;
  navTo: string;
};

export const BackButtonheader = ({ children, navTo }: headerProp) => {
  return (
    <header className="p-3 flex justify-between">
      <Link to={navTo}>
        <MdArrowBackIosNew className="h-8 w-8 text-white" />
      </Link>
      <div className="border-red-100 border-solid border-1 text-center text-white text-xs py-0">{children}</div>
      <div className="h-8 w-8"></div>
    </header>
  );
};
