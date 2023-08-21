export default function HeadNavigator() {
  return (
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
        <span
          className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
                       Portal
                   </span>
      </div>

      <div className={"flex flex-auto font-medium justify-end"}>
        <span className={"py-1 px-3 bg-gray-950 text-white rounded-3xl"}>Contact us</span>
      </div>
    </article>
  );
}