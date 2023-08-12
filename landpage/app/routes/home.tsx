export default function Home() {
    return (
        <main className={"flex flex-col"}>
            <section className={"flex flex-row justify-around items-center px-8 py-6"}>
                <span className={"flex flex-auto font-medium justify-start"}>Wasted</span>

                <div className={"flex flex-1 flex-row gap-8"}>
                    <span className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                        Projects
                    </span>
                    <span className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                        Services
                    </span>
                   <span className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                       Campaigns
                   </span>
                </div>

                <span className={"flex flex-auto font-medium justify-end"}>Contact us</span>
            </section>

            <section className={"flex justify-center items-center"}>
                <h1 className={"text-center text-7xl font-medium"}>Join us in the fight for the environment</h1>
            </section>

            <section className={"flex flex-row gap-12 items-center justify-center py-8 px-8"}>
                <div className={"bg-green-300 w-32 h-32 rounded-3xl"}>

                </div>

                <div className={"flex flex-col w-64 h-48 bg-green-100 rounded-3xl"}>
                    <div className={"flex-1 flex flex-col justify-center items-center"}>
                        <h6 className={"font-medium text-lg"}>+685 trees planted</h6>
                        <p className={"font-light text-center text-xs px-4"}>More of 685 trees were planted last year with the help of our activists</p>
                    </div>

                    <div className={"flex-1 rounded-3xl bg-green-200 flex flex-col justify-center items-center"}>
                        <h6 className={"font-medium text-lg"}>6 educational programs</h6>
                        <p className={"font-light text-center text-xs px-4"}>were launched and developed by our specialists to educate young people</p>
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
            </section>

            <section className={"flex flex-row whitespace-nowrap overflow-hidden flex-nowrap gap-8 bg-green-100 py-2"}>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
                <span className={"text-green-950 font-medium"}>Green The Planet</span>
            </section>

            <section className={"flex flex-row"}>
                <div>
                    <p>The GreenWorld has carried out many successful project for reforestation and biodiversity
                        conservation.</p>
                </div>

                <div>
                    <h2>We strive to project nature for future generations.</h2>
                    <button>About us</button>
                    <button>View Campaigns</button>
                </div>
            </section>

            <section>
                <button>Our Projects</button>
            </section>

            <section>
                <h2>We hold various events, campaigns and raise funds for the implementation of projects to preserve the environment</h2>
            </section>

            <section className={"flex flex-row"}>
                <div>
                    <h4>Cleaning up the Danube</h4>
                    <p>Our team is actively working to clean up the Danube River from pollution in order to restore its natural beauty.</p>
                </div>

                <div>
                    <h4>Forest gardens</h4>
                </div>

                <div>
                    <h4>Become a volunteer</h4>
                </div>
            </section>
        </main>
    )
}