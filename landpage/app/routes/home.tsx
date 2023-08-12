export default function Home() {
    return (
        <>
            <section className={"flex flex-col container mx-auto"}>
                <article className={"flex flex-row justify-around items-center px-8 py-6"}>
                    <span className={"flex flex-auto font-medium justify-start"}>Wasted</span>

                    <div className={"hidden md:flex flex-1 flex-row gap-6"}>
                    <span
                        className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                        Projects
                    </span>
                        <span
                            className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                        Services
                    </span>
                        <span
                            className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                       Campaigns
                   </span>
                    </div>

                    <div className={"flex flex-auto font-medium justify-end"}>
                        <span className={"py-1 px-3 bg-gray-950 text-white rounded-3xl"}>Contact us</span>
                    </div>
                </article>

                <article className={"flex justify-center items-center py-8"}>
                    <h1 className={"text-center text-6xl md:text-7xl font-medium"}>Join us in the fight for the
                        environment</h1>
                </article>

                <article className={"flex flex-col md:flex-row gap-12 items-center justify-center py-8 px-8"}>
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

            <section className={"flex flex-col container mx-auto"}>
                <article className={"flex flex-col md:flex-row justify-between gap-24 items-start px-8 md:px-20 py-12"}>
                    <div className={"flex flex-1"}>
                        <p className={"font-thin text-lg"}>The GreenWorld has carried out many successful project for
                            reforestation and biodiversity
                            conservation.</p>
                    </div>

                    <div className={"flex flex-[2] flex-col"}>
                        <h2 className={"text-4xl font-medium"}>We strive to project nature for future generations.</h2>

                        <div className={"flex flex-row mt-8"}>
                            <button
                                className={"flex rounded-3xl bg-green-200 py-1 px-12 justify-center text-center"}>About
                                us
                            </button>
                            <button className={"flex rounded-3xl py-1 px-12 justify-center text-center"}>View
                                Campaigns
                            </button>
                        </div>
                    </div>
                </article>

                <article className={"flex pl-8 md:pl-16"}>
                    <button className={"border-2 border-gray-600 rounded-3xl px-8 py-3"}>Our Projects</button>
                </article>

                <article className={"flex pl-8 md:pl-16 pr-48 py-12"}>
                    <h2 className={"text-5xl font-medium"}>We hold various events, campaigns and raise funds for the
                        implementation of projects to preserve the environment</h2>
                </article>

                <article className={"flex flex-col md:flex-row md:flex-nowrap overflow-hidden gap-4 px-8 md:px-16 pb-12"}>
                    <div className={"flex flex-col md:flex-row md:w-[36rem] md:h-64 gap-8 rounded-3xl bg-gray-200 p-6"}>
                        <div className={"flex flex-col justify-between"}>
                            <div>
                                <h4 className={"text-3xl font-medium"}>Cleaning up the Danube</h4>
                                <p className={"text-sm py-4 pr-12 md:pr-32"}>Our team is actively working to clean up the Danube
                                    River from pollution in order to restore its natural beauty.</p>
                            </div>

                            <span className={"font-medium"}>Read more</span>
                        </div>

                        <div className={"flex w-80 rounded-3xl bg-green-400"}></div>
                    </div>

                    <div className={"flex flex-col justify-between md:w-64 md:h-64 rounded-3xl bg-green-200 p-6"}>
                        <h4 className={"text-2xl font-medium"}>Forest gardens</h4>

                        <span className={"font-medium"}>Read more</span>
                    </div>

                    <div className={"flex flex-col justify-between md:w-64 md:h-64 rounded-3xl bg-gray-200 p-6"}>
                        <h4 className={"text-2xl font-medium whitespace-nowrap truncate"}>Become a volunteer</h4>

                        <span className={"font-medium"}>Read more</span>
                    </div>
                </article>
            </section>
        </>
    )
}