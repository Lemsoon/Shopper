import { Input } from "../components/Input";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

export const CreateList = () => {
  return (
    <>
      <header className="p-3 flex justify-between">
        <Link to={"/"}>
          <MdArrowBackIosNew className="h-8 w-8 text-white" />
        </Link>
        <p className="border-red-100 border-solid border-1  text-center text-white text-2xl">Creating a new list</p>
        <div className="h-8 w-8"></div>
      </header>
      <div className="w-screen h-[100%] flex justify-center items-center flex-col ">
        <p className="text-white font-semibold text-2xl mb-4">Give your new list a name!</p>
        <Input
          type="text"
          placeholder="New list name"
          maxLength={40}
          className="w-80 h-14 bg-black bg-opacity-25 border-none text-xl text-white rounded-none"
        />
      </div>
    </>
  );
};
