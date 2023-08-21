import React from "react";

export default function() {
  return (
    <div className={"flex flex-row mt-4"}>
      <div className={"flex flex-col basis-2/5"}>
        <h5 className={"text-lg font-medium"}>Social Class</h5>
        <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
      </div>

      <div className={"flex flex-row gap-4 basis-3/5"}>
        <div>
          <div className={"flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-green-600 rounded-xl"}>
            <span className={"text-3xl text-white font-medium"}>1</span>
          </div>
        </div>

        <div>
          <div className={"flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-green-600 rounded-xl"}>
            <span className={"text-3xl text-white font-medium"}>2</span>
          </div>
        </div>

        <div>
          <div className={"flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-green-600 rounded-xl"}>
            <span className={"text-3xl text-white font-medium"}>3</span>
          </div>
        </div>

        <div>
          <div className={"flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-green-600 rounded-xl"}>
            <span className={"text-3xl text-white font-medium"}>4</span>
          </div>
        </div>

        <div>
          <div className={"flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-green-600 rounded-xl"}>
            <span className={"text-3xl text-white font-medium"}>5</span>
          </div>
        </div>

        <div>
          <div className={"flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-green-600 rounded-xl"}>
            <span className={"text-3xl text-white font-medium"}>6</span>
          </div>
        </div>
      </div>
    </div>
  )
}