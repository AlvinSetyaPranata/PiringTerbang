import React from "react";

export default function Card() {
  return (
    <div className="w-[200px] rounded-md ">
      <img src="" alt="image" className="w-full h-[200px] bg-gray-400 rounded-tr-md rounded-tl-md" />
      <div className="mt-4">
        <h3 className="text-base font-semibold">Masakan padang</h3>
        <p className="text-sm font-semibold text-gray-500">Rp.12.000</p>
      </div>
    </div>
  );
}
