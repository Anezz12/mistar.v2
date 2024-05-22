"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

function Service() {
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
      <div className=" flex flex-col items-center max-w-7xl mx-auto p-5 py-20">
        <span className="text-black font-bold text-4xl py-10 dark:text-white">
          Layanan <em className="text-blue-500">Mistar</em>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900  rounded-lg shadow-md overflow-hidden">
            <Image
              src="/bg.jpeg"
              width="300"
              height="300"
              alt="some value"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                Fotocopy & Print
              </h3>
              <p className="text-gray-600 mb-4 dark:text-white">
                Secara umum, pengertian fotocopy adalah metode membuat tiruan
                atau salinan dokumen pada kertas...
              </p>
              <Link
                href="/service"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden ">
            <Image
              src="/bg.jpeg"
              width="300"
              height="300"
              alt="some value"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black mb-2 dark:text-white">
                Pres, Laminating, Scan
              </h3>
              <p className="text-gray-600 mb-4 dark:text-white">
                Kami melayani pres, laminating, dan scan. Dengan peralatan
                lengkap kami dan tim kami tidak...
              </p>
              <Link
                href="/service"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/bg.jpeg"
              width="300"
              height="300"
              alt="some value"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                Cetak Notebook/Blocknote
              </h3>
              <p className="text-gray-600 mb-4 dark:text-white">
                Buku catatan merupakan buku dengan isi yang dipakai untuk
                mencatat. Bagi Anda yang sering...
              </p>
              <Link
                href="/service"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Service;
