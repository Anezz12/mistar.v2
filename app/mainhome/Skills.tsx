"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
function Skills() {
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
      <div className=" flex flex-col items-center max-w-7xl mx-auto p-5  pt-48">
        <span className="text-black font-bold text-4xl py-10">
          Kenapa <em className="text-blue-500">Mistar</em>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 flex flex-col items-center pt-20 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/mesin1.png"
              width="50"
              height="100"
              alt="some value"
              className="items-center"
            />
            <div className="p-10  text-center bg-slate-50">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Fotocopy Terlengkap
              </h3>
              <p className="text-gray-600 mb-4">
                Kami menyediakan alat tulis kantor / ATK, PC untuk ngetik dan
                print, jasa cutting, jilid skripsi kilat, dll.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 flex flex-col items-center pt-20 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/mesin2.png"
              width="50"
              height="100"
              alt="some value"
              className="items-center"
            />
            <div className="p-10  text-center bg-slate-50">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Peralatan Terbaik
              </h3>
              <p className="text-gray-600 mb-4">
                Kami menggunakan mesin fotocopy terbaru dan terbaik saat ini dan
                peralatan - peralatan pendukung kami yang terawat dan
                berkualitas, tidak usah ragu lagi dengan hasil dari pada kami.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 flex flex-col items-center pt-20 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/jempol.png"
              width="50"
              height="100"
              alt="some value"
              className="items-center"
            />
            <div className="p-10  text-center bg-slate-50">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Layanan Terbaik
              </h3>
              <p className="text-gray-600 mb-4">
                Dengan tenaga profesional dan berketerampilan khusus di
                bidangnya, anda tidak perlu khawatir lagi dengan hasil kerja
                kami, karna kami akan memberikan pelayanan yang prima kepada
                seluruh pelanggan kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
