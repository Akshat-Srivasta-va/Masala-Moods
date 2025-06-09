import React from "react";
import Patta from "../../assets/food/patta.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Course = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* image section */}
          <div className="relative img-shadow">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0,
                dalay: 0.5,
                scale: {duration: 0.5},
              }}
              src={Patta}
              alt=""
              className="h-[300px] w-[350px] relative z-2"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[60%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[400px] w-[400px] md:h-[400px] md:w-[400px] bg-[#FED16A] rounded-full"
            ></motion.div>
          </div>
          {/* text section */}
          <div className="space-y-5 lg:max-w[400px]">
            <h1 className="text-6xl uppercase font-semibold custom-font ">
              The best south Indian and street food
            </h1>
            <p>
              Authentic South Indian flavors, served with tradition and love.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
