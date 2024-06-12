import React from "react";

export default function Card({name, price}) {
  return (
    <div className="w-[180px] rounded-md shrink-0 hover:cursor-pointer">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/303/793/304/buffet-meal-food-brunch-wallpaper-thumb.jpg"
        alt="image"
        className="w-full h-[200px] rounded-tr-md rounded-tl-md"
      />
      <div className="py-4">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm font-semibold text-gray-500">Rp.{price}</p>
      </div>
    </div>
  );
}
