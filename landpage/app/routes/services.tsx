import HeadNavigator from "~/components/HeadNavigator";
import GreenPlanet from "~/components/GreenPlanet";

export default function Services() {
  return (
    <>
      <section className={"flex flex-col container mx-auto"}>
        <HeadNavigator/>

        <article className={"flex justify-center items-center py-8"}>
          <h1 className={"text-center text-6xl md:text-7xl font-medium leading-[1.1] md:leading-none"}>Join us in the <span className={"rounded-3xl bg-green-200 px-1"}>fight</span> for the
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

      <GreenPlanet/>
    </>
  )
}