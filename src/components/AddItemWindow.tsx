import { Input } from "./Input";
import { Button } from "./button";

export const AddItemWindow = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <Input
          className="w-80 h-14 bg-black bg-opacity-25 border-none text-xl text-white rounded-none"
          placeholder="What item do you want to add?"
        />
        <div className="flex">
          <div className="w-1/2 h-14 bg-black bg-opacity-25 border border-solid border-black">
            <Button className="bg-opacity-0"></Button>
          </div>
          <div className="w-1/2 h-14 bg-black bg-opacity-25 border border-solid border-black">
            <Button className="bg-opacity-0"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
