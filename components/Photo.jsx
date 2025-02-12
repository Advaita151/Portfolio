"use client";
import React from "react";
// import adv1 from "@/public/adv1.jpg"
// import adv2 from "@/public/adv2.jpg"
// import adv3 from "@/public/adv3.jpg"
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:1.5,
            duration: 0.6,
            ease: "easeIn",}}
      >
        <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] ">
          <Image
            src="/adv2.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full mix-blend-lighten"
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
