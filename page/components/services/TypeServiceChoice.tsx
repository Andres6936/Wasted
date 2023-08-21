import React from "react";

export default function() {
  return (
    <div className={"flex flex-row mt-4"}>
      <div className={"flex flex-col basis-2/5"}>
        <h5 className={"text-lg font-medium"}>Type of Service</h5>
        <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
      </div>

      <div className={"flex flex-row basis-3/5"}>
        <div>
          <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" />
          <p>You can't change the street & direction in later use</p>
        </div>
      </div>
    </div>
  )
}