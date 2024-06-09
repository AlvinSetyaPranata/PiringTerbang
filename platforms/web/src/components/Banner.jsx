"use client";

import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(1);
  const src = [
    "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/25033025/resep-masakan-sehari-hari-yang-mudah-dan-anti-bosan-halodoc.jpg.webp",
    "https://akcdn.detik.net.id/visual/2022/06/07/adv-rankpillar_169.jpeg?w=800&q=90",
  ];

  return (
    <div className="w-full px-8 text-white min-h-[75vh] flex items-center overflow-hidden relative">
      <div className="absolute min-w-full min-h-[75vh] -z-10 left-0 bg-gradient-to-r from-black from-55%"></div>
      <AnimatePresence>
        <motion.img
          key={src[activeSlide - 1]}
          src={src[activeSlide - 1]}
          alt="image"
          className="absolute right-0 -z-20 w-full min-h-[75vh]"
          exit={{ opacity: 0, transition: {duration: 1.5, ease: easeOut} }}
          initial={{ opacity: 0, transition: {duration: 1.5, ease: easeOut} }}
          animate={{ opacity: 1, transition: {duration: 1.5, ease: easeIn} }}
        />
      </AnimatePresence>
      <div className="absolute min-w-full min-h-full -z-30 left-0 bg-black"></div>

      <div>
        <h1 className="text-5xl font-bold">Masakan padang baru!</h1>
        <p className="text-gray-300 mt-3 max-w-[50ch]">
          Memperkenalkan masakan pedas yang dapat membuat lidah anda bergoyang
        </p>
        <button className="px-4 py-3 mt-6 bg-red-600 text-white rounded-md">
          Pesan sekarang
        </button>
        <div className="flex max-w-[105px] mt-16 gap-x-2">
          <button
            onClick={() => setActiveSlide(1)}
            className={`w-[30px] h-[7px] rounded-md transition-all ease-in ${
              activeSlide == 1 ? "bg-red-600 w-[50px]" : "bg-gray-600"
            }`}
          ></button>
          <button
            onClick={() => setActiveSlide(2)}
            className={`w-[30px] h-[7px] rounded-md transition-all ease-in ${
              activeSlide == 2 ? "bg-red-600 w-[50px]" : "bg-gray-600"
            }`}
          ></button>
          <button
            onClick={() => setActiveSlide(3)}
            className={`w-[30px] h-[7px] rounded-md transition-all ease-in ${
              activeSlide == 3 ? "bg-red-600 w-[50px]" : "bg-gray-600"
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
}
