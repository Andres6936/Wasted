import { Link } from "@remix-run/react";

export default function HeadNavigator() {
  return (
    <article className={"flex flex-row justify-around items-center px-8 py-6"}>
      <Link to={"/home"} className={"flex flex-auto font-medium justify-start"}>Wasted</Link>

      <div className={"hidden md:flex flex-1 flex-row gap-6"}>
        <Link to={"/home"}
              className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
          Projects
        </Link>

        <Link to={"/services"}
              className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
          Services
        </Link>

        <Link to={"/"}
              className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
          Campaigns
        </Link>

        <Link to={"/login"}
              className={"flex flex-shrink flex-grow basis-0 rounded-3xl bg-gray-200 py-1 px-3 justify-center text-center"}>
          Portal
        </Link>
      </div>

      <div className={"flex flex-auto font-medium justify-end"}>
        <Link to={"/contact"} className={"py-1 px-3 bg-gray-950 text-white rounded-3xl"}>Contact us</Link>
      </div>
    </article>
  );
}