import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

export const CreateList = () => {
  return (
    <>
      <header className="p-3 flex justify-between">
        <Link to={"/"}>
          <MdArrowBackIosNew className="h-8 w-8 text-white" />
        </Link>
        <p className="static text-center w-screen text-white text-2xl">Creating a new list</p>
      </header>
    </>
  );
};
