"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
        <div className=" text-4xl text-center">
          Kontak <em className="text-blue-500">Saran</em>
        </div>
        <div className=" py-8">
          <div>
            <form id="contactFrom">
              <div className=" grid grid-cols-2 gap-4">
                <div>
                  <span className=" text-sm after:content-['_*'] text-black">
                    Name
                  </span>
                  <input
                    type="text"
                    className="w-full bg-white border border-blue-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                    placeholder="your name"
                    name="from"
                    required
                  />
                </div>
                <div>
                  <span className=" text-sm after:content-['_*'] text-black">
                    Email
                  </span>
                  <input
                    type="text"
                    className="w-full  bg-white border border-blue-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                    placeholder="your Email"
                    name="from"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm after:content-['_*'] text-black">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-white border border-blue-500 mt-2 p-3 rounded-xl focus:outline-none text-black"
                  placeholder="type some thing... has 1024 max length."
                  name="msg"
                  maxLength={1024}
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  className="w-full disabled:opacity-75 disabled:pointer-events-none text-center bg-blue-400 hover:bg-blue-500 px-4 py-3 rounded-xl transition duration-200 ease-in-out"
                  type="submit"
                >
                  {"Send Message "}
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
