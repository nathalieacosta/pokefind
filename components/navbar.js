// REACT AND NEXT //
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center basis-11/12 text-center p-4">

          <Link href="/">
          <div className="flex flex-row justify-center my-auto">
            <img width="50" src="pikachu.png"></img>
            <span className="text-5xl font-medium">pokéfind </span>
            </div>
          </Link>
        <div className="flex flex-row justify-center my-auto mt-2">
          {/* <span className="mx-2 my-auto bg-slate-600 rounded-xl p-2">
          login or register
        </span> */}
          <Link href="/raids">
            <span className="bg-slate-700 rounded-xl p-2 mx-2 text-3xl">
              raids
            </span>
          </Link>
          {/* <span className="bg-slate-700 rounded-xl p-2 mx-2 my-auto text-3xl">
          trades
        </span>
        <span className="bg-slate-700 rounded-xl p-2 mx-2 my-auto text-3xl">
          battles
        </span> */}
        </div>
      </div>
    </div>
  );
}
