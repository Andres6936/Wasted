"use client";

import React from "react";
import HeadNavigator from "@/components/layout/HeadNavigator";
import GreenPlanet from "@/components/layout/GreenPlanet";
import TablePriceService from "@/components/services/TablePriceService";
import ObligatoryDocuments from "@/components/services/ObligatoryDocuments";
import PersonalInformation from "@/components/services/PersonalInformation";

export default function Service() {

  return (
    <>
      <section className={"flex flex-col container mx-auto"}>
        <HeadNavigator />

        <article className={"flex justify-center items-center py-8"}>
          <h1 className={"text-center text-6xl md:text-7xl font-medium leading-[1.1] md:leading-none"}>Join us in
            the <span className={"rounded-3xl bg-green-200 px-1"}>fight</span> for the
            environment</h1>
        </article>

        <article className={"flex flex-col md:flex-row gap-4 items-center justify-center py-8 px-8"}>
          <div className={"bg-green-300 w-32 h-32 rounded-3xl"}>

          </div>

          <div className={"flex flex-col w-64 h-48 bg-green-100 rounded-3xl"}>
            <div className={"flex-1 flex flex-col justify-center items-center"}>
              <h6 className={"font-medium text-lg"}>+685 trees planted</h6>
              <p className={"font-light text-center text-xs px-4"}>More of 685 trees were planted last
                year with the help of our activists</p>
            </div>

            <div className={"flex-1 rounded-3xl bg-green-200 flex flex-col justify-center items-center"}>
              <h6 className={"font-medium text-lg"}>6 educational programs</h6>
              <p className={"font-light text-center text-xs px-4"}>were launched and developed by our
                specialists to educate young people</p>
            </div>
          </div>

          <div className={"flex bg-green-300 w-48 h-64 rounded-3xl justify-center items-end py-4 px-6"}>
            <p className={"font-medium text-lg text-center leading-5"}>Share with us your results</p>
          </div>

          <div className={"flex bg-green-300 w-64 h-48 rounded-3xl justify-center items-end py-4 px-6"}>
            <p className={"font-medium text-lg text-center leading-5"}>Donate and help the environment</p>
          </div>

          <div className={"flex bg-green-300 w-32 h-32 rounded-3xl justify-center items-center"}>
            <p className={"text-xs font-medium text-center"}>International environment day</p>
          </div>
        </article>
      </section>

      <GreenPlanet />

      <TablePriceService/>

      <section className={"flex flex-col container mx-auto"}>
        <div className={"flex flex-row items-center gap-8 my-12"}>
          <div className={"flex flex-col flex-1"}>
            <h3 className={"text-2xl font-medium"}>Total Servicio</h3>
            <p>La factura se genera sin IVA. Se identificará el servicio como 'GESTIÓN INTEGRAL DE RESIDUOS
              PELIGROSOS'</p>
          </div>

          <button className={"flex flex-1 items-center justify-center p-2 rounded-2xl text-xl bg-green-200"}>$80.000,
            Servicio
          </button>
          <button
            className={"flex flex-1 items-center justify-center p-2 rounded-2xl text-xl bg-green-700 text-white font-medium"}>$120.000,
            Servicio Prioritario
          </button>
        </div>
      </section>

      <ObligatoryDocuments/>

      <PersonalInformation/>
    </>
  )
}