'use client'

import React, { useState } from "react";
import HeadNavigator from "@/components/HeadNavigator";
import GreenPlanet from "@/components/GreenPlanet";

export default function Service() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [direction, setDirection] = useState<string>('')
  const [typeService, setTyeService] = useState<string>('')
  const [socialClass, setSocialClass] = useState<string>('')

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

      <section className={"flex flex-col container mx-auto"}>
        <article className={"border border-gray-500 rounded-2xl mt-12 p-8"}>
          <h3 className={"text-2xl font-medium"}>Information Take Service</h3>

          <div className={"flex flex-row mt-8"}>
            <div className={"flex flex-col basis-2/5"}>
              <h5 className={"text-lg font-medium"}>Street & Direction</h5>
              <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
            </div>

            <div className={"flex flex-row basis-3/5"}>
              <div>
                <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" />
                <p>You can't change the street & direction in later use</p>
              </div>
            </div>
          </div>

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
        </article>
      </section>

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

      <section className={"flex flex-col container mx-auto"}>
        <article className={"border border-gray-500 rounded-2xl p-8"}>
          <h3 className={"text-2xl font-medium"}>Documentos Requeridos</h3>
          <p>Documentos requeridos para firma de contrato</p>

          <div className={"flex flex-row gap-8 mt-8"}>
            <div className={"w-[12rem] h-[12rem] bg-green-500 rounded-2xl"}>
              <h5 className={"text-2xl text-white font-medium p-4 tracking-tighter leading-6"}>Certificado de
                Existencia</h5>
            </div>

            <div className={"w-[12rem] h-[12rem] bg-green-500 rounded-2xl"}>
              <h5 className={"text-3xl text-white font-medium p-4 tracking-tighter"}>RUT</h5>
            </div>

            <div className={"w-[12rem] h-[12rem] bg-green-500 rounded-2xl"}>
              <h5 className={"text-2xl text-white font-medium p-4 tracking-tighter leading-6"}>Copia Cédula
                Representante Legal</h5>
            </div>
          </div>
        </article>
      </section>

      <section className={"flex flex-col container mx-auto"}>
        <article className={"border border-gray-500 rounded-2xl my-12 p-8"}>
          <h3 className={"text-2xl font-medium"}>Información Personal</h3>

          <div className={"flex flex-row mt-8"}>
            <div className={"flex flex-col basis-2/5"}>
              <h5 className={"text-lg font-medium"}>Nombre Completo</h5>
              <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
            </div>

            <div className={"flex flex-row basis-3/5"}>
              <div>
                <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" />
                <p>You can't change the street & direction in later use</p>
              </div>
            </div>
          </div>

          <div className={"flex flex-row mt-4"}>
            <div className={"flex flex-col basis-2/5"}>
              <h5 className={"text-lg font-medium"}>Correo Electrónico</h5>
              <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
            </div>

            <div className={"flex flex-row basis-3/5"}>
              <div>
                <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" />
                <p>You can't change the street & direction in later use</p>
              </div>
            </div>
          </div>

          <div className={"flex mt-4 justify-end"}>
            <button className={"py-2 px-6 rounded-2xl bg-green-500 text-white font-medium"}>
              Firmar Contrato
            </button>
          </div>
        </article>
      </section>
    </>
  )
}