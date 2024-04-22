import { useRouteError } from "react-router-dom";

type errorMsg = {
  statusText?: string;
  message?: string;
};

export const ErrorPage = () => {
  const error = useRouteError() as errorMsg;
  console.error(error);

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-gray-500">
      <p className="text-red-500 font-bold">There was an error loading something...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
