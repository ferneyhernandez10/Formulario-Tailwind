import React from "react";
import smart from "../Images/Image.png";
import { Form } from "./Form";

export const MainBackground = () => {
  return (
    <div
      className="bg-[length:100%_100%] bg-center bg-no-repeat h-screen "
      style={{ backgroundImage: `url(${smart})` }}
    >
      <div className="flex flex-row justify-end items-center h-full mr-4">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <Form />
        </div>
      </div>
    </div>
  );
};
