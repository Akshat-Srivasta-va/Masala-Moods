import React from "react";
import FoodPng from "../../assets/food/dosa.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana.png";
import Tasty from "../../assets/food/tasty.png";
import { IoCartOutline } from "react-icons/io5";
import { animate, motion } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    hidden: {
      y: "100",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <main>
      <div className="p-4 min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* text content here */}
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="relative text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-outline text-transparent"
            >
              TASTE IN
              <img
                src={Tasty}
                className="absolute w-[55px] right-0 top-0 md:right-[-5px]"
              />
            </motion.h1>

            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase"
            >
              EVERY BITE
            </motion.h1>

            <motion.p
              variants={SlideUp(1.5)}
              initial="hidden"
              whileInView="show"
              className="text-sm max-w-md  custom-font"
            >
              Every bite bursts with fresh, bold flavors made just for you.
              <br />
              Enjoy food that’s simple, delicious, and full of love
            </motion.p>

            <motion.button
              variants={SlideUp(2)}
              initial="hidden"
              whileInView="show"
              className="btn-primary inline-block !mt-10"
            >
              <IoCartOutline className="inline-mr-2" />
              Order Now
            </motion.button>
          </div>

          {/* images here */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 100, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              src={FoodPng}
              className="w-[400px] img-shadow"
            />

            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 100, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              src={Spoon}
              className="w-[105px] absolute bottom-[-60px] -left-1 rotate-[140deg] img-shadow"
            />

            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 100, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              src={Banana}
              className="w-[500px] absolute top-[-100px] right-[-120px] rotate-[260deg] md:right-[-140px] img-shadow"
            />
          </div>
        </div>
      </div>

      {/* Background Yellow */}
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 50, x: 0, y: 0 }}
        className="w-[1200px] h-[1300px] rounded-3xl bg-[#FED16A] absolute top-[20%] left-[70%] z-0"
      ></motion.div>
    </main>
  );
};

export default Hero;
