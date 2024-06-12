import React from "react";
import Card from "./Card";

export default function CardGroupGrid({ data, title }) {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-2xl mb-6">{title}</h1>

      <div className="grid grid-cols-6 gap-x-4 ">
        {data &&
          data.map((item, index) => (
            <Card name={item.name} price={item.price} key={index} />
          ))}
      </div>
    </div>
  );
}
