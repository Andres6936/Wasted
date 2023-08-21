import React from "react";

export default function() {
  return (
    <section className={"flex flex-col container mx-auto"}>
      <article className={"border border-gray-500 rounded-2xl p-8"}>
        <h3 className={"text-2xl font-medium"}>Documentos Requeridos</h3>
        <p className={"w-[80%]"}>Documentos requeridos para firma de contrato, una vez envié la información necesaria para la cotización,
          recibirá un corre electrónico con instrucciones para iniciar sesión el sitio web, donde deberá subir los
          documentos requeridos.</p>

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
  );
}