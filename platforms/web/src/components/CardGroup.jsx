import React from "react";
import Card from "./Card";

export default function CardGroup() {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-2xl mb-6">Masih hangat</h1>
      <div className="flex w-full overflow-x-auto gap-x-12 items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
