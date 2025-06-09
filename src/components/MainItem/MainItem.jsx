import React from "react";

import Food1 from "../../assets/food/idli.png";
import Food2 from "../../assets/food/pavbhaji.png";
import Food3 from "../../assets/food/utpam.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const HotDesertData = [
  {
    id: 1,
    name: "Idli",
    img: Food1,
    price: "50₹",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Pav Bhaji",
    img: Food2,
    price: "80₹",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Uttpam",
    img: Food3,
    price: "40₹",
    delay: 1.2,
  },
];

const MainItem = () => {
  return (
    <section>
      <div className="container py-12">
        {/* Heading Section */}
        <motion.h3
        variants={SlideUp(0)}
        initial = "initial"
        whileInView="show"
        className="text-2xl font-semibold text-green-800 py-8">
          South Indian
        </motion.h3>
        {/* grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

{HotDesertData.map((item) =>{
  return (
     <motion.div 
    variants = {SlideUp(item.delay)}
    initial="hidden"
    whileInView = "show"
    className="group bg-white/40 shadow-md p-4 flex items-center gap-8">
      <img src={item.img} className="w-28 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-rotate-[50deg]"/>
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-xl text-[#FED16A]">{item.price}</p>
    </motion.div>
  )
})}

        </div>
      </div>
    </section>
  );
};

export default MainItem;
