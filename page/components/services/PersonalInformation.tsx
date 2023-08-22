import AddressInput from "@/components/services/AddressInput";
import TypeServiceChoice from "@/components/services/TypeServiceChoice";
import SocialClassChoice from "@/components/services/SocialClassChoice";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [numberPhone, setNumberPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [observation, setObservation] = useState<string>("");

  const onSignContract = async () => {
    const supabase = createClientComponentClient();

    await supabase.from("Quotes").insert({
      Name: name,
      Email: email,
      NumberPhone: numberPhone,
      Address: address,
      Observation: observation
    });
  };

  return (
    <section className={"flex flex-col container mx-auto"}>
      <article className={"border border-gray-500 rounded-2xl my-12 p-8"}>
        <h3 className={"text-2xl font-medium"}>Información Personal</h3>

        <div className={"flex flex-row mt-8"}>
          <div className={"flex flex-col basis-2/5"}>
            <h5 className={"text-lg font-medium"}>Nombre y/o Razón Social</h5>
            <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
          </div>

          <div className={"flex flex-row basis-3/5"}>
            <div>
              <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" value={name}
                     onChange={({ target }) => setName(target.value)} />
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
              <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" value={email}
                     onChange={({ target }) => setEmail(target.value)} />
              <p>You can't change the street & direction in later use</p>
            </div>
          </div>
        </div>

        <div className={"flex flex-row mt-4"}>
          <div className={"flex flex-col basis-2/5"}>
            <h5 className={"text-lg font-medium"}>Número Telefónico</h5>
            <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
          </div>

          <div className={"flex flex-row basis-3/5"}>
            <div>
              <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" value={numberPhone}
                     onChange={({ target }) => setNumberPhone(target.value)} />
              <p>You can't change the street & direction in later use</p>
            </div>
          </div>
        </div>

        <div className={"flex flex-row mt-4"}>
          <div className={"flex flex-col basis-2/5"}>
            <h5 className={"text-lg font-medium"}>Actividad Comercial</h5>
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
            <h5 className={"text-lg font-medium"}>Cargo</h5>
            <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
          </div>

          <div className={"flex flex-row basis-3/5"}>
            <div>
              <input className={"border border-gray-500 rounded-3xl w-[24rem]"} type="text" />
              <p>You can't change the street & direction in later use</p>
            </div>
          </div>
        </div>

        <AddressInput value={address} onChange={(address: string) => setAddress(address)} />

        <TypeServiceChoice />

        <div className={"flex flex-row mt-4"}>
          <div className={"flex flex-col basis-2/5"}>
            <h5 className={"text-lg font-medium"}>Proceso de Generación Residual</h5>
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
            <h5 className={"text-lg font-medium"}>Generación Aproximada en Kg</h5>
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
            <h5 className={"text-lg font-medium"}>Observaciones</h5>
            <p className={"text-md"}>Some instructions lorem ipsum is simply dummy text of printing.</p>
          </div>

          <div className={"flex flex-row basis-3/5"}>
            <div>
              <textarea className={"border border-gray-500 rounded-xl w-[24rem]"} value={observation}
                        onChange={({ target }) => setObservation(target.value)} />
              <p>You can't change the street & direction in later use</p>
            </div>
          </div>
        </div>

        <SocialClassChoice />

        <div className={"flex mt-4 justify-end"}>
          <button onClick={onSignContract}
                  className={"py-2 px-6 rounded-2xl w-[16rem] bg-green-500 text-white font-medium"}>
            Enviar
          </button>
        </div>
      </article>
    </section>
  );
}