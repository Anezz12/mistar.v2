"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="py-20 text-black font-bold">
        <div className=" text-4xl text-center dark:text-white">
          Kontak <em className="text-blue-500">Saran</em>
        </div>
        <div className=" py-8">
          <div>
            <form id="contactFrom">
              <div className=" grid grid-cols-2 gap-4">
                <div>
                  <span className=" text-sm after:content-['_*'] text-black dark:text-white">
                    Name
                  </span>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                    placeholder="your name"
                    name="from"
                    required
                  />
                </div>
                <div>
                  <span className=" text-sm after:content-['_*'] text-black dark:text-white">
                    Email
                  </span>
                  <input
                    type="text"
                    className="w-full  bg-white border border-gray-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                    placeholder="your Email"
                    name="from"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm after:content-['_*'] text-black dark:text-white">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-white border border-gray-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                  placeholder="type some thing... has 1024 max length."
                  name="msg"
                  maxLength={1024}
                  required
                ></textarea>
              </div>
              <div className="mt-4 flex flex-col items-center text-white">
                <button
                  className="group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 dark:text-white"
                  type="submit"
                >
                  {"submit "}
                  <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
