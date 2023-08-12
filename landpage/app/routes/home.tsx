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

            <section className={"flex flex-row items-center"}>
                <div>
                    <div>
                        <h6>+685 trees planted</h6>
                        <p>More of 685 trees were planted last year with the help of our activists</p>
                    </div>
                    <div>
                        <h6>6 educational programs</h6>
                        <p>were launched and developed by our specialists to educate young people</p>
                    </div>
                </div>

                <div>
                    <p>Share with us your results</p>
                </div>

                <div>
                    <p>Donate and help the environment</p>
                </div>

                <div>
                    <p>International environment day</p>
                </div>
            </section>

            <section className={"flex flex-row"}>
                <p>Green the planet</p>
                <p>Green the planet</p>
                <p>Green the planet</p>
                <p>Green the planet</p>
                <p>Green the planet</p>
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