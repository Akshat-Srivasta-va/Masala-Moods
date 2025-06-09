import React from "react";
import Food1 from "../../assets/food/idli.png";
import Food2 from "../../assets/food/pavbhaji.png";
import Food3 from "../../assets/food/utpam.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const StreetData = [
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

const Street = () => {
  return (
    <section>
      <div className="container">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center custom-font font-semibold uppercase py-8"
        >
          {" "}
          Our Popular Recipe
        </motion.h3>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {StreetData.map((item) => {
          return (
            <div className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
              <img src={item.img} alt="" className="w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px]
              group-hover:rotate-[50deg] transition-all
              duration-400
              "/>
              <div>
                <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                  Buy Now
                </button>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-xl font-bold text-yellow-500">
                  {item.price}
                </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Street;
