import React from "react";

interface Props {
  value: string,
  onChange: (value: string) => void
}

export default function(props: Props) {
  return (
    <div className={"flex flex-row mt-4"}>
      <div className={"flex flex-col basis-2/5"}>
        <h5 className={"text-lg font-medium"}>Dirección</h5>
        <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
      </div>

      <div className={"flex flex-row basis-3/5"}>
        <div>
          <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" value={props.value}
                 onChange={({ target }) => props.onChange(target.value)} />
          <p>You can't change the street & direction in later use</p>
        </div>
      </div>
    </div>
  );
}