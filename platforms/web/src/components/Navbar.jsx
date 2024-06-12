import React from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-6 w-full box-border bg-red-600 text-white">
      <div className="flex gap-x-4 items-center">
        <img src="/logo.svg" alt="logo" />
        <div>
          <h1 className="text-2xl font-bold">PiringTerbang</h1>
          <p className="text-sm text-yellow-200">
            Puas makannya, hemat kantongnya
          </p>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <button className="hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <Sidebar />
      </div>

      {/* <div className="flex gap-x-12 font-semibold">
        <Link href="#">Beranda</Link>
        <Link href="#">Baru</Link>
        <Link href="#">Cari</Link>
      </div>

      <div className="flex gap-x-4">
        <button className="px-4 py-2 text-sm rounded-md bg-white text-black">
          Login
        </button>
        <button className="px-4 py-2 text-sm rounded-md bg-white text-black">
          Register
        </button>
      </div> */}
    </div>
  );
}
