import { Button } from "./button";

export const ContentWindow = () => {
  return (
    <div className="h-screen  flex justify-center items-center">
      <p className="text-3xl text-white">There is nothing here yet...</p>

      <Button className="text-black bg-white fixed bottom-20 right-3 my-4 mr-5 rounded-full w-40 h-12 text-xl border-black ">
        Create List
      </Button>
    </div>
  );
};
