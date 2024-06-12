import React from "react";
import Card from "./Card";

export default function CardGroup({data, title}) {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-2xl mb-6">{title}</h1>
      <div className="flex w-full overflow-x-auto gap-x-12 items-center">
        {data && data.map((item, index) => (
          <Card name={item.name} price={item.price} key={index}/>
        ))}
      </div>
    </div>
  );
}
