import React from "react";

const OneStep = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[600px]">
      <h1 className="text-center text-blue-600 font-bold text-xl">
        ¿Que tipo de pregunta desea crear?
      </h1>
      <div className="grid grid-cols-2 grid-rows-[200px] [&>div]:shadow-md gap-8  mx-auto w-full">
        <div className="items-center flex justify-center bg-amber-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
          Completar
        </div>
        <div className="items-center flex justify-center bg-purple-500 text-white rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
          Radio Button
        </div>
      </div>
    </div>
  );
};

export default OneStep;
