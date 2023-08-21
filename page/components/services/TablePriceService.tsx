import React from "react";

export default function() {
  return (
    <section className={"flex flex-col container mx-auto"}>
      <div className={"flex flex-row mt-12 px-8 py-4 bg-green-200 uppercase rounded-t-2xl"}>
        <h3 className={"flex flex-1 text-lg font-medium"}>Nombre Técnico Asignado</h3>
        <h3 className={"flex flex-1 text-lg font-medium text-center items-center justify-center"}>
          Manejo Ambiental</h3>
        <h3 className={"flex flex-1 text-lg font-medium text-center items-center justify-center"}>
          Frecuencia 1 Vez al Mes</h3>
        <h3 className={"flex flex-1 text-lg font-medium text-center items-center justify-center"}>
          Frecuencia 2 Vez al Mes</h3>
        <h3 className={"flex flex-1 text-lg font-medium text-center items-center justify-center"}>
          Frecuencia 4 Vez al Mes</h3>
      </div>

      <div className={"flex flex-row bg-green-600 text-white px-8 py-4 rounded-b-2xl"}>
        <div className={"flex flex-col flex-1"}>
          <h2 className={"flex flex-1 font-medium text-2xl"}>Biosanitarios</h2>
          <h2 className={"flex flex-1 font-medium text-2xl"}>Anatomopatológicos</h2>
          <h2 className={"flex flex-1 font-medium text-2xl"}>Cortopunzante</h2>
        </div>

        <div className={"flex flex-col flex-1 text-center"}>
          <h2 className={"flex flex-1 items-center justify-center font-medium text-2xl"}>Desactivación</h2>
          <h2 className={"flex flex-[2] items-center justify-center font-medium text-2xl"}>Incineración</h2>
        </div>

        <div className={"flex flex-col flex-1 text-center"}>
          <h1 className={"flex flex-1 items-center justify-center text-4xl font-bold px-14"}>$30.000 Hasta 10Kg
            Mes</h1>
        </div>

        <div className={"flex flex-col flex-1 text-center"}>
          <h1 className={"flex flex-1 items-center justify-center text-4xl font-bold px-14"}>$45.000 Hasta 25Kg
            Mes</h1>
        </div>

        <div className={"flex flex-col flex-1 text-center"}>
          <h1 className={"flex flex-1 items-center justify-center text-4xl font-bold px-14"}>$81.000 Hasta 50Kg
            Mes</h1>
        </div>
      </div>
    </section>
  )
}