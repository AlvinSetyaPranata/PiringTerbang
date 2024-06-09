import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-6 w-full box-border bg-red-600 text-white">
      <div className="flex gap-x-4 items-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-2xl font-bold">PiringTerbang</h1>
      </div>

      <div className="flex gap-x-12 font-semibold">
        <p>Beranda</p>
        <p>Baru</p>
        <p>Diskon</p>
      </div>

      <div className="flex gap-x-4">
        <button className="px-4 py-2 text-sm rounded-md bg-white text-black">
          Login
        </button>
        <button className="px-4 py-2 text-sm rounded-md bg-white text-black">
          Register
        </button>
      </div>
    </div>
  );
}
