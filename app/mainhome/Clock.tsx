"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Clock() {
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
      <div className="pt-32">
        <div className="flex flex-col items-center   py-0 bg-blue-500">
          <div className="container">
            <div className="row items-center justify-center text-center">
              <div className="col-md-8">
                <span className=" text-white  font-bold text-lg">
                  Jam Operasional
                  <br />
                  <br />
                  SENIN - SABTU (08.00 - 21.00 WIB)
                  <br />
                  <br />
                  Minggu Kadang Buka Kadang Tutup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Clock;
